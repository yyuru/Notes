/**
 * Import GSAP
 * The GreenSock Animation Platform (GSAP) animates anything JavaScript can touch (CSS properties, SVG, React, canvas, generic objects, whatever)
 * and solves countless browser inconsistencies
 * @link https://greensock.com/get-started/
 */
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, TextPlugin);

/**
 * Creates a tween going TO the given values.
 *
 * ```js
 * gsap.to(".class", {x: 100});
 * ```
 *
 * @param {TweenTarget} targets
 * @param {TweenVars} vars
 * @returns {Tween} Tween instance
 * @memberof gsap
 * @link https://greensock.com/docs/v3/GSAP/gsap.to()
 */
export function animateTo(
  el: gsap.TweenTarget,
  payload: gsap.TweenVars
): gsap.core.Tween {
  return gsap.to(el, payload);
}

/**
 * Creates a tween coming FROM the given values.
 *
 * ```js
 * gsap.from(".class", {x: 100});
 * ```
 *
 * @param {TweenTarget} targets
 * @param {TweenVars} vars
 * @returns {Tween} Tween instance
 * @memberof gsap
 * @link https://greensock.com/docs/v3/GSAP/gsap.from()
 */
export function animateFrom(
  el: gsap.TweenTarget,
  payload: gsap.TweenVars
): gsap.core.Tween {
  return gsap.from(el, payload);
}
