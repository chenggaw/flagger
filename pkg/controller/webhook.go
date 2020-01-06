package controller

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/kubernetes/scheme"
	"k8s.io/client-go/tools/reference"
	"k8s.io/utils/clock"
	"net/http"
	"net/url"
	"time"

	flaggerv1 "github.com/weaveworks/flagger/pkg/apis/flagger/v1alpha3"
)

func callWebhook(webhook string, payload interface{}, timeout string) error {
	payloadBin, err := json.Marshal(payload)
	if err != nil {
		return err
	}

	hook, err := url.Parse(webhook)
	if err != nil {
		return err
	}

	req, err := http.NewRequest("POST", hook.String(), bytes.NewBuffer(payloadBin))
	if err != nil {
		return err
	}

	req.Header.Set("Content-Type", "application/json")

	if timeout == "" {
		timeout = "10s"
	}

	t, err := time.ParseDuration(timeout)
	if err != nil {
		return err
	}

	ctx, cancel := context.WithTimeout(req.Context(), t)
	defer cancel()

	r, err := http.DefaultClient.Do(req.WithContext(ctx))
	if err != nil {
		return err
	}
	defer r.Body.Close()

	b, err := ioutil.ReadAll(r.Body)
	if err != nil {
		return fmt.Errorf("error reading body: %s", err.Error())
	}

	if r.StatusCode > 202 {
		return errors.New(string(b))
	}

	return nil
}

// CallWebhook does a HTTP POST to an external service and
// returns an error if the response status code is non-2xx
func CallWebhook(name string, namespace string, phase flaggerv1.CanaryPhase, w flaggerv1.CanaryWebhook) error {
	payload := flaggerv1.CanaryWebhookPayload{
		Name:      name,
		Namespace: namespace,
		Phase:     phase,
	}

	if w.Metadata != nil {
		payload.Metadata = *w.Metadata
	}

	if len(w.Timeout) < 2 {
		w.Timeout = "10s"
	}

	return callWebhook(w.URL, payload, w.Timeout)
}

func CallEventWebhook(r *flaggerv1.Canary, webhook, message, eventtype string) error {
	t := clock.RealClock{}.Now()
	ref, err := reference.GetReference(scheme.Scheme, r)
	if err != nil {
		return err
	}

	namespace := ref.Namespace
	if namespace == "" {
		namespace = metav1.NamespaceDefault
	}

	event := v1.Event{
		ObjectMeta: metav1.ObjectMeta{
			Name:      fmt.Sprintf("%v.%x", ref.Name, t.UnixNano()),
			Namespace: namespace,
		},
		InvolvedObject: *ref,
		Reason:         "Synced",
		Message:        message,
		Source: v1.EventSource{
			Component: "flagger",
		},
		Type: eventtype,
	}

	return callWebhook(webhook, event, "5s")
}
