/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderHead, a as addAttribute, e as renderComponent, f as renderSlot, b as createAstro } from '../chunks/astro/server_BkUrnYda.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-[#0d0d30] w-screen h-20 fixed z-50"> <div class="flex justify-start items-center h-full px-4"> <div class="flex-grow flex justify-center"> <img src="../../logo.svg" class="rounded-full h-16 w-16 hover:h-[4.5rem] hover:w-[4.5rem] transition-all duration-500 cursor-pointer "> </div> </div> </header>`;
}, "C:/Users/alvar/web_aula/src/components/Header.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderHead()}</head> <section class="flex flex-col items-center justify-center pt-32 md:pt-24 lg:pt-28 xl:pt-32 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#22235f] via-[#27286b] to-[#0d0d30] bg-center bg-cover"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"> <h1 class="max-w-lg mx-auto font-bold text-4xl md:text-5xl text-white mb-4 leading-tight"> <span id="animatedTitle" class="text-white "></span> <span id="animatedTitle2" class="text-blue-600"></span> <span id="cursor" class="text-white">|</span> </h1> <p class="max-w-md mx-auto text-sm font-normal text-gray-500 mb-6">
Transformamos Ideas en Soluciones Abiertas, Fomentando el Conocimiento
      y la Creatividad en Cada Proyecto.
</p> <a class="cursor-pointer w-auto mb-10 inline-flex items-center justify-center py-3 px-6 text-base font-semibold text-center text-white rounded-full bg-blue-600 shadow-xs hover:bg-blue-800 transition-all duration-500">
Únete a nosotros <svg class="ml-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </a> <div class="flex justify-center"> <img src="../../photo.webp" alt="Dashboard image" class="rounded-t-3xl h-auto object-cover w-[90%] md:w-[65%] shadow-2xl"> </div> </div> </section>`;
}, "C:/Users/alvar/web_aula/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="bg-[#0d0d43]"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image" href="../../logo.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Hero", $$Hero, {})} </body></html>`;
}, "C:/Users/alvar/web_aula/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Aula Software Libre - Inicio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main></main> ` })}`;
}, "C:/Users/alvar/web_aula/src/pages/index.astro", void 0);

const $$file = "C:/Users/alvar/web_aula/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
