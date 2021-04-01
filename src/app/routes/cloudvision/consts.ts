import {TreeNode} from 'primeng/api';
import {ServiceDomain} from './entities';

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

  public static namespacesToTreeNode(domain: ServiceDomain, env:string): TreeNode[] {

    return domain.namespaces.filter(a => a.indexOf('-' + env + '-') > -1).map(function (namespace) {
      return {label: namespace}
    });

  }
}
