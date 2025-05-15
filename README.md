# vue3-lazy-render

A Vue 3 plugin for lazy rendering components.

## Installation

```bash
npm install vue3-lazy-render
```
or
```bash
yarn add vue3-lazy-render
```

## Usage

Register the plugin in your Vue 3 project:

```js
import { createApp } from 'vue';
import App from './App.vue';
import VueLazyRender from 'vue3-lazy-render';

const app = createApp(App);
app.use(VueLazyRender);
app.mount('#app');
```

Use the `<LazyRender>` component in your templates to wrap your own components:

```vue
<template>
  <LazyRender>
    <div>
      This content will only render when visible in the viewport.
    </div>
  </LazyRender>
</template>
```
or 
```vue
<template>
  <LazyRender>
    <YourComponent />
  </LazyRender>
</template>
```

You can also use the `renderClasses` prop to add classes only when the content becomes visible. This is useful for triggering animations or transitions:

```vue
<template>
    <LazyRender :renderClasses="['fadein', 'animation-duration-1000', 'animation-delay-500']">
        <div>
            This content will fade in when it enters the viewport.
        </div>
    </LazyRender>
</template>
```

The classes specified in `renderClasses` will be applied to the root element of the slot content only when it is rendered (i.e., visible).


## License

MIT
