import {TreeNode} from 'primeng/api';
import {ServiceDomain, ServiceDomainParticipant} from './entities';

export const URL_CAPACITY_ARIS_URL = 'http://localhost:8080/capacity/aris/';
export const URL_COST_SERVICES = 'http://localhost:8080/cost/services';
export const URL_COST_ARIS = 'http://localhost:8080/cost/aris/';
export const URL_SERVICE_DOMAIN_NETWORK = 'http://localhost:8080/service-domain/network/';
export const URL_SERVICE_DOMAIN_QUOTA = 'http://localhost:8080/service-domain/quota/';
export const URL_SERVER_LIST = 'http://localhost:8080/server/list';
export const URL_SERVER_SERVICE_DOMAIN = 'http://localhost:8080/service-domain/list';

export const JIRA_URL = 'https://issues.devops.poalim.bank';
export const GRAFANA_URL = 'https://monitor.devops.poalim.bank';


export class EnvUtils {

  public static namespacesToTreeNode(domain: ServiceDomain, env: string): TreeNode[] {

    return domain.namespaces.filter(a => a.indexOf('-' + env + '-') > -1).map(function (namespace) {
      return {label: namespace}
    });

  }
}

export class ServiceDomainUtils {

  public static owner(domain: ServiceDomain): ServiceDomainParticipant {
    if (domain.roles !== null && domain.roles.length > 0) {
      let owners = domain.roles.filter(A => A.role === 'owner');
      if (owners.length > 0) {
        return owners[0];
      }
    }

    if (domain.owner_name === null) {
      if (domain.owner_email === null) {
        return {role: 'owner', name: 'UNKNOWN', username: 'UNKNOWN', email: 'UNKNOWN'}
      }
    } else {
      return {role: 'owner', name: domain.owner_name, email: domain.owner_email, username: 'UNKNOWN'}
    }

  }
}
