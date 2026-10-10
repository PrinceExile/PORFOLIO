import { createElement } from 'react';

export function Github(props) {
  return createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...props,
    'aria-hidden': 'true',
  }, [
    createElement('path', {
      key: 'github-path',
      d: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
    }),
  ]);
}

export function Linkedin(props) {
  return createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...props,
    'aria-hidden': 'true',
  }, [
    createElement('path', {
      key: 'linkedin-path-1',
      d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z',
    }),
    createElement('rect', {
      key: 'linkedin-path-2',
      x: '2',
      y: '9',
      width: '4',
      height: '12',
    }),
    createElement('circle', {
      key: 'linkedin-path-3',
      cx: '4',
      cy: '4',
      r: '2',
    }),
  ]);
}

export function Mail(props) {
  return createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...props,
    'aria-hidden': 'true',
  }, [
    createElement('path', {
      key: 'mail-path',
      d: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z',
    }),
    createElement('polyline', {
      key: 'mail-polyline',
      points: '22,6 12,13 2,6',
    }),
  ]);
}

export function ExternalLink(props) {
  return createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...props,
    'aria-hidden': 'true',
  }, [
    createElement('path', {
      key: 'external-link-path',
      d: 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
    }),
    createElement('polyline', {
      key: 'external-link-polyline',
      points: '15 3 21 3 21 9',
    }),
    createElement('line', {
      key: 'external-link-line',
      x1: '10',
      y1: '14',
      x2: '21',
      y2: '3',
    }),
  ]);
}

export function Send(props) {
  return createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...props,
    'aria-hidden': 'true',
  }, [
    createElement('line', {
      key: 'send-line',
      x1: '22',
      y1: '2',
      x2: '11',
      y2: '13',
    }),
    createElement('polygon', {
      key: 'send-polygon',
      points: '22 2 15 22 11 13 2 9 22 2',
    }),
  ]);
}

export function ArrowRight(props) {
  return createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...props,
    'aria-hidden': 'true',
  }, [
    createElement('line', {
      key: 'arrow-right-line',
      x1: '5',
      y1: '12',
      x2: '19',
      y2: '12',
    }),
    createElement('polyline', {
      key: 'arrow-right-polyline',
      points: '12 5 19 12 12 19',
    }),
  ]);
}

export function MapPin(props) {
  return createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...props,
    'aria-hidden': 'true',
  }, [
    createElement('path', {
      key: 'map-pin-path',
      d: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z',
    }),
    createElement('circle', {
      key: 'map-pin-circle',
      cx: '12',
      cy: '10',
      r: '3',
    }),
  ]);
}

export function Heart(props) {
  return createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    ...props,
    'aria-hidden': 'true',
  }, [
    createElement('path', {
      key: 'heart-path',
      d: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
    }),
  ]);
}