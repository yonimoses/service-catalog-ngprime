export interface TableRow {}


export interface NetworkConnection {
  dns: string;
  env: string;
  name: string;
  address: string;
}

export interface CentralService {
  dns: string;
  port: number;
  env: string;
  name: string;
  address: string;
}
export interface Quota {
  cpu: string;
  env: string;
  memory: string;
  storage: string;
}

export interface Envs {
  dev: any[];
  prod: any[];
  preprod: any[];
  staging: any[];
}
export interface ServiceDomainParticipant {
  name: string;
  username: string;
  email?: string;
  role: string;
}

export interface Links {
  grafana: string[];
  bitbucket: string[];
  jira: any[];
  sonarqube: any[];
  artifactory: any[];
  aqua: any[];
  checkmarx: any[],
  snyk: any[],
  ocp: string[];
}

export interface ServiceDomain extends TableRow {
  domain_name: string;
  domain_repo_name: string;
  group_email: string;
  owner_email: string;
  owner_name?: any;
  system_aris: number;
  system_name_aris: string;
  repos: string[];
  roles: ServiceDomainParticipant[];
  groups: string[];
  source_project: string;
  source_address: string;
  projects: string[];
  system_aris_description: string;
  system_aris_title: string;
  envs: Envs;
  namespaces: string[];
  clusters: string[];
  links: Links;
}


export interface Server extends TableRow {
  hostname: string;
  group: string;
  ipaddress: string;
  products: string[];
  dns: string;
  cpu: number;
  mem: number;
  storage: number;
}

export interface ServiceDomains {
  namespaces: string[];
  names: string[];
}

export interface Usage {
  sonar: number;
  bitbucket: number;
  snyk: number;
  checkmarx: number;
  artifactory: number;
  openshift_cpu: number;
  openshift_mem: number;
  openshift_storage: number;
}

export  interface ArisUsageEntity extends TableRow {
  aris: string;
  name: string;
  owner_email: string;
  owner_name: string;
  service_domains: ServiceDomains;
  usage: Usage;
}

export interface ServicePriceUnit {
  name: string;
  help: string;
  unit: number;
}

// export const _ENTITY_PRICING_HELP = new Map<string,string>();
// _ENTITY_PRICING_HELP.set('sonar', 'Line of code');
// _ENTITY_PRICING_HELP.set('bitbucket', 'Single Code contributor');
// _ENTITY_PRICING_HELP.set('checkmarx', 'Single Code contributor');
// _ENTITY_PRICING_HELP.set('snyk', 'Single Code contributor');
// _ENTITY_PRICING_HELP.set('openshift_storage', '1G of Storage');
// _ENTITY_PRICING_HELP.set('openshift_cpu', '1 vCPU');
// _ENTITY_PRICING_HELP.set('openshift_memory', '1G of Memory');
// _ENTITY_PRICING_HELP.set('artifactory', '1G of Storage');
