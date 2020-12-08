(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{286:function(t,a,e){"use strict";e.r(a);var s=e(37),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"blue-green-deployments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blue-green-deployments","aria-hidden":"true"}},[t._v("#")]),t._v(" Blue/Green Deployments")]),t._v(" "),e("p",[t._v("This guide shows you how to automate Blue/Green deployments with Flagger and Kubernetes.")]),t._v(" "),e("p",[t._v("For applications that are not deployed on a service mesh, Flagger can orchestrate Blue/Green style deployments\nwith Kubernetes L4 networking. When using a service mesh blue/green can be used as\nspecified "),e("router-link",{attrs:{to:"/usage/deployment-strategies.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/weaveworks/flagger/master/docs/diagrams/flagger-bluegreen-steps.png",alt:"Flagger Blue/Green Stages"}})]),t._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("p",[t._v("Flagger requires a Kubernetes cluster "),e("strong",[t._v("v1.11")]),t._v(" or newer.")]),t._v(" "),e("p",[t._v("Install Flagger and the Prometheus add-on:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("helm repo "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" flagger https://flagger.app\n\nhelm upgrade -i flagger flagger/flagger "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--namespace flagger "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--set prometheus.install"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--set "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("meshProvider")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("kubernetes\n")])])]),e("p",[t._v("If you already have a Prometheus instance running in your cluster, you can point Flagger to the ClusterIP service with:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("helm upgrade -i flagger flagger/flagger "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--namespace flagger "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--set "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("metricsServer")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://prometheus.monitoring:9090\n")])])]),e("p",[t._v("Optionally you can enable Slack notifications:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("helm upgrade -i flagger flagger/flagger "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--reuse-values "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--namespace flagger "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--set slack.url"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--set slack.channel"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("general "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--set slack.user"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("flagger\n")])])]),e("h2",{attrs:{id:"bootstrap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap","aria-hidden":"true"}},[t._v("#")]),t._v(" Bootstrap")]),t._v(" "),e("p",[t._v("Flagger takes a Kubernetes deployment and optionally a horizontal pod autoscaler (HPA),\nthen creates a series of objects (Kubernetes deployment and ClusterIP services).\nThese objects expose the application inside the cluster and drive the canary analysis and Blue/Green promotion.")]),t._v(" "),e("p",[t._v("Create a test namespace:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl create ns "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),e("p",[t._v("Create a deployment and a horizontal pod autoscaler:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl apply -k github.com/weaveworks/flagger//kustomize/podinfo\n")])])]),e("p",[t._v("Deploy the load testing service to generate traffic during the analysis:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl apply -k github.com/weaveworks/flagger//kustomize/tester\n")])])]),e("p",[t._v("Create a canary custom resource:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flagger.app/v1beta1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Canary\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" podinfo\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# service mesh provider can be: kubernetes, istio, appmesh, nginx, gloo")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kubernetes\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# deployment reference")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetRef")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" podinfo\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the maximum time in seconds for the canary deployment")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# to make progress before rollback (default 600s)")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("progressDeadlineSeconds")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HPA reference (optional)")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("autoscalerRef")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" autoscaling/v2beta1\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HorizontalPodAutoscaler\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" podinfo\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9898")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("portDiscovery")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("analysis")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# schedule interval (default 60s)")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30s\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# max number of failed checks before rollback")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("threshold")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# number of checks to run before rollback")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("iterations")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Prometheus checks based on ")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http_request_duration_seconds histogram")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metrics")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("success"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rate\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# minimum req success rate (non 5xx responses)")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# percentage (0-100)")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("thresholdRange")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("min")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1m\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" request"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("duration\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# maximum req duration P99")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# milliseconds")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("thresholdRange")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30s\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# acceptance/load testing hooks")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("webhooks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" smoke"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pre"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rollout\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//flagger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("loadtester.test/\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("timeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 15s\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" bash\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cmd")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"curl -sd 'anon' http://podinfo-canary.test:9898/token | grep token\"")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" load"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("test\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//flagger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("loadtester.test/\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("timeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5s\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cmd\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cmd")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hey -z 1m -q 10 -c 2 http://podinfo-canary.test:9898/"')]),t._v("\n")])])]),e("p",[t._v("The above configuration will run an analysis for five minutes.")]),t._v(" "),e("p",[t._v("Save the above resource as podinfo-canary.yaml and then apply it:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl apply -f ./podinfo-canary.yaml\n")])])]),e("p",[t._v("After a couple of seconds Flagger will create the canary objects:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# applied ")]),t._v("\ndeployment.apps/podinfo\nhorizontalpodautoscaler.autoscaling/podinfo\ncanary.flagger.app/podinfo\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# generated ")]),t._v("\ndeployment.apps/podinfo-primary\nhorizontalpodautoscaler.autoscaling/podinfo-primary\nservice/podinfo\nservice/podinfo-canary\nservice/podinfo-primary\n")])])]),e("p",[t._v("Blue/Green scenario:")]),t._v(" "),e("ul",[e("li",[t._v("on bootstrap, Flagger will create three ClusterIP services ("),e("code",[t._v("app-primary")]),t._v(","),e("code",[t._v("app-canary")]),t._v(", "),e("code",[t._v("app")]),t._v(")\nand a shadow deployment named "),e("code",[t._v("app-primary")]),t._v(" that represents the blue version")]),t._v(" "),e("li",[t._v("when a new version is detected, Flagger would scale up the green version and run the conformance tests\n(the tests should target the "),e("code",[t._v("app-canary")]),t._v(" ClusterIP service to reach the green version)")]),t._v(" "),e("li",[t._v("if the conformance tests are passing, Flagger would start the load tests and validate them with custom Prometheus queries")]),t._v(" "),e("li",[t._v("if the load test analysis is successful, Flagger will promote the new version to "),e("code",[t._v("app-primary")]),t._v(" and scale down the green version")])]),t._v(" "),e("h2",{attrs:{id:"automated-blue-green-promotion"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#automated-blue-green-promotion","aria-hidden":"true"}},[t._v("#")]),t._v(" Automated Blue/Green promotion")]),t._v(" "),e("p",[t._v("Trigger a deployment by updating the container image:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl -n "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" image deployment/podinfo "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("podinfod")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("stefanprodan/podinfo:3.1.1\n")])])]),e("p",[t._v("Flagger detects that the deployment revision changed and starts a new rollout:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("kubectl -n test describe canary/podinfo\n\nEvents:\n\nNew revision detected podinfo.test\nWaiting for podinfo.test rollout to finish: 0 of 1 updated replicas are available\nPre-rollout check acceptance-test passed\nAdvance podinfo.test canary iteration 1/10\nAdvance podinfo.test canary iteration 2/10\nAdvance podinfo.test canary iteration 3/10\nAdvance podinfo.test canary iteration 4/10\nAdvance podinfo.test canary iteration 5/10\nAdvance podinfo.test canary iteration 6/10\nAdvance podinfo.test canary iteration 7/10\nAdvance podinfo.test canary iteration 8/10\nAdvance podinfo.test canary iteration 9/10\nAdvance podinfo.test canary iteration 10/10\nCopying podinfo.test template spec to podinfo-primary.test\nWaiting for podinfo-primary.test rollout to finish: 1 of 2 updated replicas are available\nPromotion completed! Scaling down podinfo.test\n")])])]),e("p",[e("strong",[t._v("Note")]),t._v(" that if you apply new changes to the deployment during the canary analysis, Flagger will restart the analysis.")]),t._v(" "),e("p",[t._v("You can monitor all canaries with:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("watch")]),t._v(" kubectl get canaries --all-namespaces\n\nNAMESPACE   NAME      STATUS        WEIGHT   LASTTRANSITIONTIME\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("        podinfo   Progressing   "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-06-16T14:05:07Z\nprod        frontend  Succeeded     "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-06-15T16:15:07Z\nprod        backend   Failed        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),t._v("-06-14T17:05:07Z\n")])])]),e("h2",{attrs:{id:"automated-rollback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#automated-rollback","aria-hidden":"true"}},[t._v("#")]),t._v(" Automated rollback")]),t._v(" "),e("p",[t._v("During the analysis you can generate HTTP 500 errors and high latency to test Flagger's rollback.")]),t._v(" "),e("p",[t._v("Exec into the load tester pod with:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl -n "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it flagger-loadtester-xx-xx "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n")])])]),e("p",[t._v("Generate HTTP 500 errors:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("watch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://podinfo-canary.test:9898/status/500\n")])])]),e("p",[t._v("Generate latency:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("watch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://podinfo-canary.test:9898/delay/1\n")])])]),e("p",[t._v("When the number of failed checks reaches the analysis threshold, the green version is scaled to zero and the rollout is marked as failed.")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("kubectl -n test describe canary/podinfo\n\nStatus:\n  Failed Checks:         2\n  Phase:                 Failed\nEvents:\n  Type     Reason  Age   From     Message\n  ----     ------  ----  ----     -------\n  Normal   Synced  3m    flagger  New revision detected podinfo.test\n  Normal   Synced  3m    flagger  Advance podinfo.test canary iteration 1/10\n  Normal   Synced  3m    flagger  Advance podinfo.test canary iteration 2/10\n  Normal   Synced  3m    flagger  Advance podinfo.test canary iteration 3/10\n  Normal   Synced  3m    flagger  Halt podinfo.test advancement success rate 69.17% < 99%\n  Normal   Synced  2m    flagger  Halt podinfo.test advancement success rate 61.39% < 99%\n  Warning  Synced  2m    flagger  Rolling back podinfo.test failed checks threshold reached 2\n  Warning  Synced  1m    flagger  Canary failed! Scaling down podinfo.test\n")])])]),e("h2",{attrs:{id:"custom-metrics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#custom-metrics","aria-hidden":"true"}},[t._v("#")]),t._v(" Custom metrics")]),t._v(" "),e("p",[t._v("The analysis can be extended with Prometheus queries. The demo app is instrumented with Prometheus so you can\ncreate a custom check that will use the HTTP request duration histogram to validate the canary (green version).")]),t._v(" "),e("p",[t._v("Create a metric template and apply it on the cluster:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flagger.app/v1beta1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MetricTemplate\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" not"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("found"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("percentage\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" prometheus\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("address")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//flagger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("promethues.flagger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9090")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("query")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),e("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n    100 - sum(\n        rate(\n            http_request_duration_seconds_count{\n              kubernetes_namespace="{{ namespace }}",\n              kubernetes_pod_name=~"{{ target }}-[0-9a-zA-Z]+(-[0-9a-zA-Z]+)"\n              status!="{{ interval }}"\n            }[1m]\n        )\n    )\n    /\n    sum(\n        rate(\n            http_request_duration_seconds_count{\n              kubernetes_namespace="{{ namespace }}",\n              kubernetes_pod_name=~"{{ target }}-[0-9a-zA-Z]+(-[0-9a-zA-Z]+)"\n            }[{{ interval }}]\n        )\n    ) * 100')]),t._v("\n")])])]),e("p",[t._v("Edit the canary analysis and add the following metric:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("analysis")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metrics")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"404s percentage"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("templateRef")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" not"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("found"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("percentage\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("thresholdRange")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("max")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1m\n")])])]),e("p",[t._v("The above configuration validates the canary (green version) by checking if the HTTP 404 req/sec percentage is\nbelow 5 percent of the total traffic. If the 404s rate reaches the 5% threshold, then the rollout is rolled back.")]),t._v(" "),e("p",[t._v("Trigger a deployment by updating the container image:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl -n "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" image deployment/podinfo "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("podinfod")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("stefanprodan/podinfo:3.1.3\n")])])]),e("p",[t._v("Generate 404s:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("watch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://podinfo-canary.test:9898/status/400\n")])])]),e("p",[t._v("Watch Flagger logs:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("kubectl -n flagger logs deployment/flagger -f | jq .msg\n\nNew revision detected podinfo.test\nScaling up podinfo.test\nAdvance podinfo.test canary iteration 1/10\nHalt podinfo.test advancement 404s percentage 6.20 > 5\nHalt podinfo.test advancement 404s percentage 6.45 > 5\nRolling back podinfo.test failed checks threshold reached 2\nCanary failed! Scaling down podinfo.test\n")])])]),e("p",[t._v("If you have "),e("router-link",{attrs:{to:"/usage/alerting.html"}},[t._v("alerting")]),t._v(" configured,\nFlagger will send a notification with the reason why the canary failed.")],1),t._v(" "),e("h2",{attrs:{id:"conformance-testing-with-helm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conformance-testing-with-helm","aria-hidden":"true"}},[t._v("#")]),t._v(" Conformance Testing with Helm")]),t._v(" "),e("p",[t._v("Flagger comes with a testing service that can run Helm tests when configured as a pre-rollout webhook.")]),t._v(" "),e("p",[t._v("Deploy the Helm test runner in the "),e("code",[t._v("kube-system")]),t._v(" namespace using the "),e("code",[t._v("tiller")]),t._v(" service account:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("helm repo "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" flagger https://flagger.app\n\nhelm upgrade -i flagger-helmtester flagger/loadtester "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--namespace"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("kube-system "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--set "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("serviceAccountName")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tiller\n")])])]),e("p",[t._v("When deployed the Helm tester API will be available at "),e("code",[t._v("http://flagger-helmtester.kube-system/")]),t._v(".")]),t._v(" "),e("p",[t._v("Add a helm test pre-rollout hook to your chart:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("analysis")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("webhooks")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"conformance testing"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pre"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("rollout\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//flagger"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("helmtester.kube"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system/\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("timeout")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3m\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"helm"')]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cmd")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test {{ .Release.Name }} --cleanup"')]),t._v("\n")])])]),e("p",[t._v("When the canary analysis starts, Flagger will call the pre-rollout webhooks.\nIf the helm test fails, Flagger will retry until the analysis threshold is reached and the canary is rolled back.")]),t._v(" "),e("p",[t._v("For an in-depth look at the analysis process read the "),e("router-link",{attrs:{to:"/usage/how-it-works.html"}},[t._v("usage docs")]),t._v(".")],1)])},[],!1,null,null,null);a.default=n.exports}}]);