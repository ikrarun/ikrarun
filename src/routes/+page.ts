// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = false;
import { setIndicator } from '$lib/store/postion';
setIndicator();
