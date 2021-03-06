import { InjectionToken } from '@angular/core';
import { PluginConfig } from './plugins-config';

export const NgChartjsDefaultPluginToken: InjectionToken<PluginConfig>
    = new InjectionToken<PluginConfig>('[ngx-chart-js] Global Default Plugin');

export const NgChartjsCustomPluginToken: InjectionToken<PluginConfig>
    = new InjectionToken<PluginConfig>('[ngx-chart-js] Global Custom Plugin');
