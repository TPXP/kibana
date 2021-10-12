/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { EnterpriseSearchMetric } from './classes';
import { LARGE_BYTES, SMALL_FLOAT, LARGE_FLOAT } from '../../../../common/formatting';
import { i18n } from '@kbn/i18n';

const perSecondUnitLabel = i18n.translate('xpack.monitoring.metrics.entSearch.perSecondUnitLabel', {
  defaultMessage: '/s',
});

export const metrics = {
  app_search_total_engines: new EnterpriseSearchMetric({
    field: 'enterprisesearch.stats.product_usage.app_search.total_engines',
    metricAgg: 'avg',
    label: i18n.translate('xpack.monitoring.metrics.entSearch.app_search_engines', {
      defaultMessage: 'App Search Engines',
    }),
    description: i18n.translate(
      'xpack.monitoring.metrics.entSearch.app_search_engines.description',
      {
        defaultMessage:
          'Current number of App Search engines within the Enterprise Search deployment.',
      }
    ),
    format: SMALL_FLOAT,
    units: '',
  }),

  workplace_search_total_org_sources: new EnterpriseSearchMetric({
    field: 'enterprisesearch.stats.product_usage.workplace_search.total_org_sources',
    metricAgg: 'avg',
    label: i18n.translate('xpack.monitoring.metrics.entSearch.workplace_search_org_sources', {
      defaultMessage: 'Workpace Search Org Sources',
    }),
    description: i18n.translate(
      'xpack.monitoring.metrics.entSearch.workplace_search_org_sources.description',
      {
        defaultMessage:
          'Current number of Workplace Search org-wide content sources within the Enterprise Search deployment.',
      }
    ),
    format: SMALL_FLOAT,
    units: '',
  }),

  workplace_search_total_private_sources: new EnterpriseSearchMetric({
    field: 'enterprisesearch.stats.product_usage.workplace_search.total_private_sources',
    metricAgg: 'avg',
    label: i18n.translate('xpack.monitoring.metrics.entSearch.workplace_search_private_sources', {
      defaultMessage: 'Workpace Search Private Sources',
    }),
    description: i18n.translate(
      'xpack.monitoring.metrics.entSearch.workplace_search_private_sources.description',
      {
        defaultMessage:
          'Current number of Workplace Search private content sources within the Enterprise Search deployment.',
      }
    ),
    format: SMALL_FLOAT,
    units: '',
  }),

  enterprise_search_heap_used: new EnterpriseSearchMetric({
    field: 'enterprisesearch.health.jvm.memory_usage.heap_used.bytes',
    metricAgg: 'max',
    label: i18n.translate('xpack.monitoring.metrics.entSearch.heap_used', {
      defaultMessage: 'Heap Used',
    }),
    description: i18n.translate('xpack.monitoring.metrics.entSearch.heap_used.description', {
      defaultMessage: 'Current amount of JVM Heam memory used by the application.',
    }),
    format: LARGE_BYTES,
    units: 'bytes',
  }),

  enterprise_search_heap_committed: new EnterpriseSearchMetric({
    field: 'enterprisesearch.health.jvm.memory_usage.heap_committed.bytes',
    metricAgg: 'max',
    label: i18n.translate('xpack.monitoring.metrics.entSearch.heap_committed', {
      defaultMessage: 'Heap Committed',
    }),
    description: i18n.translate('xpack.monitoring.metrics.entSearch.heap_committed.description', {
      defaultMessage:
        'The amount of memory JVM has allocated from the OS and is available to the application.',
    }),
    format: LARGE_BYTES,
    units: 'bytes',
  }),

  enterprise_search_heap_total: new EnterpriseSearchMetric({
    field: 'enterprisesearch.health.jvm.memory_usage.heap_max.bytes',
    metricAgg: 'max',
    label: i18n.translate('xpack.monitoring.metrics.entSearch.heap_total', {
      defaultMessage: 'Heap Total',
    }),
    description: i18n.translate(
      'xpack.monitoring.metrics.enterpriseSearch.heap_total.description',
      {
        defaultMessage: 'Maximum amount of JVM heap memory available to the application.',
      }
    ),
    format: LARGE_BYTES,
    units: 'bytes',
  }),

  enterprise_search_threads_current: new EnterpriseSearchMetric({
    field: 'enterprisesearch.health.jvm.threads.current',
    metricAgg: 'max',
    label: i18n.translate('xpack.monitoring.metrics.entSearch.threads.current', {
      defaultMessage: 'Active Threads',
    }),
    description: i18n.translate('xpack.monitoring.metrics.entSearch.threads.current.description', {
      defaultMessage: 'Currently running JVM threads used by the application.',
    }),
    format: SMALL_FLOAT,
    units: '',
  }),

  enterprise_search_threads_rate: new EnterpriseSearchMetric({
    field: 'enterprisesearch.health.jvm.threads.total_started',
    metricAgg: 'max',
    derivative: true,
    label: i18n.translate('xpack.monitoring.metrics.entSearch.threads.rate', {
      defaultMessage: 'Thread Creation Rate',
    }),
    description: i18n.translate('xpack.monitoring.metrics.entSearch.threads.rate.description', {
      defaultMessage: 'Currently running JVM threads used by the application.',
    }),
    format: SMALL_FLOAT,
    units: perSecondUnitLabel,
  }),

  crawler_workers_active: new EnterpriseSearchMetric({
    field: 'enterprisesearch.health.crawler.workers.active',
    metricAgg: 'max',
    label: i18n.translate('xpack.monitoring.metrics.entSearch.active_crawler_workers', {
      defaultMessage: 'Active Crawler Workers',
    }),
    description: i18n.translate(
      'xpack.monitoring.metrics.entSearch.active_crawler_workers.description',
      {
        defaultMessage: 'Currently active App Search crawler workers.',
      }
    ),
    format: SMALL_FLOAT,
    units: '',
  }),

  enterprise_search_http_connections_current: new EnterpriseSearchMetric({
    field: 'enterprisesearch.stats.http.connections.current',
    metricAgg: 'max',
    label: i18n.translate('xpack.monitoring.metrics.entSearch.http_connections.current', {
      defaultMessage: 'Open HTTP Connections',
    }),
    description: i18n.translate(
      'xpack.monitoring.metrics.entSearch.http_connections.current.description',
      {
        defaultMessage: 'Currently open incoming HTTP connections across all instances.',
      }
    ),
    format: SMALL_FLOAT,
    units: '',
  }),

  enterprise_search_http_connections_rate: new EnterpriseSearchMetric({
    field: 'enterprisesearch.stats.http.connections.total',
    metricAgg: 'max',
    derivative: true,
    label: i18n.translate('xpack.monitoring.metrics.entSearch.http_connections.rate', {
      defaultMessage: 'HTTP Connections Rate',
    }),
    description: i18n.translate(
      'xpack.monitoring.metrics.entSearch.current_http_connections.description',
      {
        defaultMessage: 'The rate of incoming HTTP connections across all instances.',
      }
    ),
    format: LARGE_FLOAT,
    units: perSecondUnitLabel,
  }),

  enterprise_search_http_bytes_received_total: new EnterpriseSearchMetric({
    field: 'enterprisesearch.stats.http.network.received.bytes',
    metricAgg: 'max',
    label: i18n.translate('xpack.monitoring.metrics.entSearch.http_bytes_received.total', {
      defaultMessage: 'HTTP Bytes Received',
    }),
    description: i18n.translate(
      'xpack.monitoring.metrics.entSearch.http_bytes_received.total.description',
      {
        defaultMessage: 'Total number of bytes received by all instances in the deployment.',
      }
    ),
    format: LARGE_BYTES,
    units: 'bytes',
  }),

  enterprise_search_http_bytes_received_rate: new EnterpriseSearchMetric({
    field: 'enterprisesearch.stats.http.network.received.bytes',
    metricAgg: 'max',
    derivative: true,
    label: i18n.translate('xpack.monitoring.metrics.entSearch.http_bytes_received.rate', {
      defaultMessage: 'Incoming HTTP Traffic',
    }),
    description: i18n.translate(
      'xpack.monitoring.metrics.entSearch.http_bytes_received.rate.description',
      {
        defaultMessage: 'Incoming HTTP traffic rate across all instances in the deployment.',
      }
    ),
    format: LARGE_BYTES,
    units: perSecondUnitLabel,
  }),

  enterprise_search_http_bytes_sent_total: new EnterpriseSearchMetric({
    field: 'enterprisesearch.stats.http.network.sent.bytes',
    metricAgg: 'max',
    label: i18n.translate('xpack.monitoring.metrics.entSearch.http_bytes_sent.total', {
      defaultMessage: 'HTTP Bytes Sent',
    }),
    description: i18n.translate(
      'xpack.monitoring.metrics.entSearch.http_bytes_sent.total.description',
      {
        defaultMessage: 'Total number of bytes sent by all instances in the deployment.',
      }
    ),
    format: LARGE_BYTES,
    units: 'bytes',
  }),

  enterprise_search_http_bytes_sent_rate: new EnterpriseSearchMetric({
    field: 'enterprisesearch.stats.http.network.sent.bytes',
    metricAgg: 'max',
    derivative: true,
    label: i18n.translate('xpack.monitoring.metrics.entSearch.http_bytes_sent.rate', {
      defaultMessage: 'Outgoing HTTP Traffic',
    }),
    description: i18n.translate(
      'xpack.monitoring.metrics.entSearch.http_bytes_sent.rate.description',
      {
        defaultMessage: 'Outgoing HTTP traffic across all instances in the deployment.',
      }
    ),
    format: LARGE_BYTES,
    units: perSecondUnitLabel,
  }),

  enterprise_search_http_2xx_rate: new EnterpriseSearchMetric({
    field: 'enterprisesearch.stats.http.responses.2xx',
    metricAgg: 'max',
    derivative: true,
    label: i18n.translate('xpack.monitoring.metrics.entSearch.http_2xx.rate', {
      defaultMessage: 'HTTP 2xx Responses',
    }),
    description: i18n.translate('xpack.monitoring.metrics.entSearch.http_2xx.rate.description', {
      defaultMessage: 'Outgoing HTTP 2xx responses across all instances in the deployment.',
    }),
    format: LARGE_FLOAT,
    units: perSecondUnitLabel,
  }),

  enterprise_search_http_3xx_rate: new EnterpriseSearchMetric({
    field: 'enterprisesearch.stats.http.responses.3xx',
    metricAgg: 'max',
    derivative: true,
    label: i18n.translate('xpack.monitoring.metrics.entSearch.http_3xx.rate', {
      defaultMessage: 'HTTP 3xx Responses',
    }),
    description: i18n.translate('xpack.monitoring.metrics.entSearch.http_3xx.rate.description', {
      defaultMessage: 'Outgoing HTTP 3xx responses across all instances in the deployment.',
    }),
    format: LARGE_FLOAT,
    units: perSecondUnitLabel,
  }),

  enterprise_search_http_4xx_rate: new EnterpriseSearchMetric({
    field: 'enterprisesearch.stats.http.responses.4xx',
    metricAgg: 'max',
    derivative: true,
    label: i18n.translate('xpack.monitoring.metrics.entSearch.http_4xx.rate', {
      defaultMessage: 'HTTP 4xx Responses',
    }),
    description: i18n.translate('xpack.monitoring.metrics.entSearch.http_4xx.rate.description', {
      defaultMessage: 'Outgoing HTTP 4xx responses across all instances in the deployment.',
    }),
    format: LARGE_FLOAT,
    units: perSecondUnitLabel,
  }),

  enterprise_search_http_5xx_rate: new EnterpriseSearchMetric({
    field: 'enterprisesearch.stats.http.responses.5xx',
    metricAgg: 'max',
    derivative: true,
    label: i18n.translate('xpack.monitoring.metrics.entSearch.http_5xx.rate', {
      defaultMessage: 'HTTP 5xx Responses',
    }),
    description: i18n.translate('xpack.monitoring.metrics.entSearch.http_5xx.rate.description', {
      defaultMessage: 'Outgoing HTTP 5xx responses across all instances in the deployment.',
    }),
    format: LARGE_FLOAT,
    units: perSecondUnitLabel,
  }),
};
