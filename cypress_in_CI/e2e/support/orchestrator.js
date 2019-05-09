import apps_api from '../fixtures/apiorchestrator/apps-apis.json';
import ems_api from '../fixtures/apiorchestrator/ems-apis.json';
import hwim_api from '../fixtures/apiorchestrator/hwim-apis.json';
import license_api from '../fixtures/apiorchestrator/license-apis.json';
import moss_api from '../fixtures/apiorchestrator/moss-apis.json';
import pnm_api from '../fixtures/apiorchestrator/pnm-apis.json';
import prometheus_api from '../fixtures/apiorchestrator/prometheus-apis.json';
import sm_api from '../fixtures/apiorchestrator/sm-apis.json';
import um_api from '../fixtures/apiorchestrator/um-apis.json';

Cypress.Commands.add('initiateApiOrchestrator', (options = {}) => {
  cy.server();
  cy.route('GET', '/api/v2/hardware?hw_type=EdgeCloud', hwim_api.GET_hw_type);
  cy.route('POST', '/api/v2/um/loginSession', um_api.POST_login_session);
  cy.route('POST', '/api/v2/um/refreshSession', um_api.POST_refresh_session);
  cy.route('PUT', '/api/v2/login/changePassword', um_api.PUT_change_password);
  cy.route('POST', '/api/v2/um/logoutSession', um_api.POST_logout_session);
  cy.route('GET', '/api/v2/login/user', um_api.GET_cypressowneruser);
  cy.route('GET', '/api/v2/applications/indoor', apps_api.GET_indoor);
  cy.route('POST', '/api/v2/applications', apps_api.POST_applications);
  cy.route('DELETE', '/api/v2/applications', apps_api.DELETE_applications);
  cy.route('GET', '/api/v2/edgecloud/hardware*', ems_api.GET_edgecloudhardware);
  cy.route('POST', '/api/v2/software/edges/release-versions', ems_api.POST_release_versions);
  cy.route('PATCH', '/api/v2/edgecloud' + '/:hwId', hwim_api.PATCH_edgecloud);
  cy.route('PUT', '/api/v2/hardware/enodebs', hwim_api.PUT_enodebs);
  cy.route('GET', '/api/v2/hardware/enodebs', hwim_api.GET_enodebs);
  cy.route('GET', '/api/v2/users/license', license_api.GET_license);
  cy.route('POST', '/api/v2/hardware/enbs/BaiCell', moss_api.POST_baicell);
  cy.route('POST', '/api/v2/hardware/enbs/Nokia', moss_api.POST_enbsNokia);
  cy.route('POST', '/api/v2/hardware/enbs/BaiCell/status', moss_api.POST_enbsbaicellStatus);
  cy.route('POST', '/api/v2/hardware/enbs/Nokia/status', moss_api.POST_enbsNokiaStatus);
  cy.route('POST', '/api/v2/hardware/enbs/status/lists', moss_api.POST_enbsStatusLists);
  cy.route('GET', '/api/v2/networks/hardware/groups/info', moss_api.GET_hardwareGroupsInfo);
  cy.route('POST', '/api/v2/hardware/edges/id', moss_api.POST_hardwareEdgesId);
  cy.route('GET', '/api/v2/network-diagnostics/cell-trace/status*', moss_api.GET_celltraceStatus);
  cy.route('PATCH', '/api/v2/network-diagnostics/cell-trace/action', moss_api.PATCH_celltraceAction);
  cy.route('GET', '/api/v2/network-diagnostics/cell-trace/files*', moss_api.GET_celltraceFiles);
  cy.route('DELETE', '/api/v2/network-diagnostics/cell-trace/files*', moss_api.DELETE_celltraceFilesDelete);
  cy.route('GET', '/api/v2/apGroups', moss_api.GET_apgroups);
  cy.route('PUT', '/api/v2/apGroups/endbs', moss_api.PUT_apgroupsendbs);
  cy.route('POST', '/api/v2/apGroups/update', moss_api.POST_apgroupsUpdate);
  cy.route('POST', '/api/v2/network-diagnostics/cell-trace/files*', moss_api.POST_celltraceFilePost);
  cy.route('GET', '/api/v2/pnm/Slice', pnm_api.GET_slice);
  cy.route('GET', '/api/v2/dashboardstats/ucore_counter_stats', prometheus_api.GET_ucore_counter_stats);
  cy.route('GET', '/api/v2/dashboardstats/ucore_enb_stats', prometheus_api.GET_ucore_enb_stats);
  cy.route('GET', '/api/v2/hardware/statistics', prometheus_api.GET_statistics);
  cy.route('GET', '/api/v2/dashboardstats/ucore_enb_stats' + '/:pnmId', prometheus_api.GET_ucore_enb_stats_pnmid);
  cy.route('GET', '/api/v2/dashboardstats/ucore_history_stats*', prometheus_api.GET_ucore_history_stats);
  cy.route('GET', '/api/v2/dashboardstats/ucore_current_stats', prometheus_api.GET_ucore_current_stats);
  cy.route('GET', '/api/v2/sm/subscriptions/count', sm_api.GET_subscriptionsCount);
  cy.route('GET', '/api/v2/sm/sims/count', sm_api.GET_simsCount);
  cy.route('GET', '/api/v2/sm/subscriptions/lists', sm_api.GET_subscriptionsLists);
  cy.route('PUT', '/api/v2/sm/subscriptions', sm_api.PUT_subscriptions);
  cy.route('PUT', '/api/v2/sm/subscriptions/imsis', sm_api.PUT_smsubscriptions_imsis);
  cy.route('PUT', '/api/v2/accounts/subscriptions/imsis', sm_api.PUT_accountsubscriptions_imsis);
  cy.route('GET', '/api/v2/dashboardstats/track_ue', sm_api.GET_track_ue);
  cy.route('GET', '/api/v2/moss/hwid', sm_api.GET_hwid);
  cy.route('GET', '/api/v2/hardware/enodebhwid', sm_api.GET_enodebhwid);
});