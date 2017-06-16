$(() => {

    $('.cy-slider').each((_, _slider) => {

        const slider = $(_slider)
        const state = {
            slide: -1,
            slides: [],
            markers: []
        }

        /**
         * Setup images
         */
        slider.find('.cy-slide[data-image]').each((_, el) => ($(el).css('background', `url(${$(el).data('image')}) center / cover`)))

        /**
         * Setup slides
         */

        slider.find('.cy-slide').each((_, el) => (state.slides.push( $(el).remove() )))

        /**
         * Setup markers
         */

        slider.append(() => (
            `<div class="cy-slider-markers">${
                state.slides.map((s, i) => (`<div class="cy-slider-marker" data-slide="${i}"></div>`))
            }</div>`.replace(/,/g, '')
        ))
        slider.find('.cy-slider-marker').click((el) => {
            goToSlide($(el.target).data('slide'))
        })

        /**
         * Setup waves
         */

        const setSlide = (slide, oldSlide, callBack) => {
            if(oldSlide) {
                oldSlide.fadeOut('fast', () => {
                    oldSlide.remove()
                    slider.append(slide)
                    slide.fadeIn()
                    callBack(slide)
                })
            } else {
                slider.append(slide)
                slide.fadeIn()
                callBack(slide)
            }
        }

        const updateMarkers = (index) => {
            slider.find('.cy-slider-marker').removeClass('cy-active')
            slider.find(`.cy-slider-marker[data-slide="${index}"]`).addClass('cy-active')
        }

        const updateWaves = (slide) => {
            let centerEl = slide.find('.cy-slide-waves-center')
            for(let i = 0; i < centerEl.length; i++) {
                const el = $(centerEl[i])
                if(el.css('display') !== 'none') {
                    centerEl = el
                    break
                }
            }
            const pos = centerEl.position()
            const center = { left: pos.left + centerEl.width() / 2, top: pos.top + centerEl.height() / 2 }

            const proportion = 1.618
            const count = 2
            let size = Math.min(centerEl.height(), $(window).width() / 3)

            for (let i = 0; i < count; i++) {
                size = size * proportion
                let wave = slider.find(`#cy-slider-wave-${i}`)

                if(wave.length === 0) {
                    wave = $($.parseHTML(
                        `<div id="cy-slider-wave-${i}" class="cy-slider-circle cy-slider-circle-${i + 1}"></div>`
                    ))
                    slider.find('.cy-slider-circle-wrapper').prepend(wave)
                }
                    
                wave.css({
                    top: center.top - size / 2,
                    left: center.left - size / 2,
                    width: size,
                    height: size
                })
                
            }

        }

        const updateColor = (slide) => {
            slider.css({ backgroundColor: slide.data('color') })
        }

        const goToSlide = (index = 0) => {
            if(state.slides.length > 0) {
                const oldSlide = state.slides[state.slide]
                state.slide = index
                const slide = state.slides[index]

                setSlide(slide, oldSlide, () => {
                    updateMarkers(index)
                    updateWaves(slide)
                    updateColor(slide)
                    window.__updateTranslation? window.__updateTranslation() : false
                })
            }
        }

        const nextSlide = () => goToSlide((state.slide + 1) % state.slides.length)
        const prevSlide = () => goToSlide((state.slide + state.slides.length - 1) % state.slides.length)

        goToSlide(0)

        // setInterval(nextSlide, 4000)

    })

})