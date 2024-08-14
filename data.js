export const dashboardWidgetCategory = {
  CSPM: "CSPM Executive Dashboard",
  CWPP: "CWPP Dashboard",
  REGISTRY: "Registry Scan",
};

export const dashboardWidgets = {
  [dashboardWidgetCategory.CSPM]: [
    {
      id: "aaaa",
      title: "Cloud Accounts",
      desc: "The main benefit of using the cloud to store your files is the ease of access. You can retrieve your files from wherever you are, on any device, so long as it's connected to the internet.",
      isVisible: true,
    },
    {
      id: "aaab",
      title: "Cloud Account Risk Assessment",
      desc: "A cloud security risk assessment is an analysis of an organization's cloud infrastructure to determine its security posture.",
      isVisible: true,
    },
  ],
  [dashboardWidgetCategory.CWPP]: [
    {
      id: "aaac",
      title: "Top 5 Namespace Specific Alerts",
      desc: "In a new cluster, Kubernetes automatically creates the following namespaces: default (for user workloads) and three namespaces for the Kubernetes control plane: kube-node-lease, kube-public, and kube-system. Kubernetes also allows admins to manually create custom namespaces.",
      isVisible: true,
    },
    {
      id: "aaad",
      title: "Workload alerts",
      desc: "A cloud workload, then, is an application, service, capability, or a specified amount of work that consumes cloud-based resources (such as computing or memory power).",
      isVisible: true,
    },
  ],
  [dashboardWidgetCategory.REGISTRY]: [
    {
      id: "aaae",
      title: "Image Risk Assessment",
      desc: "Kube-Scan is a Kubernetes risk assessment tool by Octarine. It can scan Kubernetes clusters, providing a simple number that indicates a risk level for each workload—0 for low risk and 10 for high risk.",
      isVisible: true,
    },
    {
      id: "aaaf",
      title: "Image Security Issues",
      desc: "Image security should be paid much attention in order to combat illegal access, revision, and other attacks.",
      isVisible: true,
    },
  ],
};
