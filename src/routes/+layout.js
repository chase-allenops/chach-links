import posthog from 'posthog-js'
import { browser } from '$app/environment';
import { PUBLIC_POSTHOG } from '$env/static/public';

export const load = async () => {

  if (browser) {
    posthog.init(
        PUBLIC_POSTHOG,
      {
        api_host:'https://us.i.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: false,
        capture_pageleave: false
      }
    )
  }
  return
};