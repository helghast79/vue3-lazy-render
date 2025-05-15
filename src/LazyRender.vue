
<template>
    <div ref="containerRef" :class="transitionClasses">
        <slot /> 
    </div>
</template>
  
<script setup>
    import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
    
    const props = defineProps({
        renderClasses: { type: String, default: '' },
        threshold: { type: Number, default: 0.1 },
        rootMargin: { type: String, default: '0px 0px -10% 0px' }
    })
    
    const isVisible = ref(false)
    const containerRef = ref(null)
    let observer = null
    
    const transitionClasses = computed(() => !isVisible.value ? 'render-hidden' : props.renderClasses)
       

    onMounted(() => {
        const observeWhenReady = () => {
            observer = new IntersectionObserver(([entry]) => {
                console.log('Visible:', entry.isIntersecting)
                if (entry.isIntersecting) {
                    isVisible.value = true
                    observer.disconnect()
                }
                }, {
                threshold: props.threshold,
                root: null,
                rootMargin: props.rootMargin
            })

            if (containerRef.value) {
                observer.observe(containerRef.value)
            }
        };

        // Delay observing until browser settles layout
        if ('requestIdleCallback' in window) {
            requestIdleCallback(observeWhenReady)
        } else {
            setTimeout(observeWhenReady, 100)
        }
    })
  
    onBeforeUnmount(() => {
        if (containerRef.value) {
            // Cleanup
            observer?.disconnect()
        }
    })
</script>


<style scoped>
    .render-hidden {
        visibility: hidden;
        pointer-events: none;
    }
</style>
  