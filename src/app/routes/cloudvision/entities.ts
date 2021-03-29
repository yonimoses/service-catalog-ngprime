export interface TableRow {}

export default interface Server extends TableRow {
  hostname: string;
  ipaddress: string;
  products: string[];
  dns: string;
  cpu: number;
  mem: number;
  storage: number;
}

export interface ServiceDomains {
  names: string[];
  deployments: string[];
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

export default interface CapacityEntity extends TableRow {
  aris: string;
  name: string;
  owner_email: string;
  owner_name: string;
  service_domains: ServiceDomains;
  usage: Usage;
}

export default interface ServicePriceUnit {
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
