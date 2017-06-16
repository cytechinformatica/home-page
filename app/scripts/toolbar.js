$(() => {

    if($(window).width() < 993) return; 

    const toolbarComponent = $('.cy-toolbar')
    const headerFabComponent = $('.cy-header-fab')
    const firstSectionComponent = $('.1st-section')

    /**
     * MENUS
     */

    const wavesCount = 2
    const waves = []
    const waveTemplate = index =>
        (`<div id="cy-toolbar-active-circle-${index}" class="cy-toolbar-active-circle"></div>`)

    const state = {
        menu: -1,
        menus: [],
    }

    $('.cy-toolbar-menu').each((i, el) => {
        state.menus.push($(el))
        $(el).click(() => goToMenu(i))
    })

    const updateWaves = (index = state.menu) => {
        for (let i = 0; i < wavesCount; i++) {
            let wave = $(`#cy-toolbar-active-circle-${i}`)
            if (wave.length === 0) {
                wave = $($.parseHTML(waveTemplate(i)))
                wave.css({ transition: `all ${(i + 1) + 5}00ms cubic-bezier(0.8, 0, 0.2, 1)` })
                toolbarComponent.append(wave)
                waves.push(wave)
            }
        }

        const menu = state.menus[index]

        if (menu) {
            const menuPos = menu.position()

            let size = menu.height() / 1.15
            let factor = 1.618
            waves.map((w, i) => {
                size *= factor
                w.css({
                    top: menuPos.top + menu.height() / 2 - size / 2,
                    left: menuPos.left + menu.width() / 2 - size / 2,
                    width: size,
                    height: size
                })
            })
        } else {
            waves.map(w => w.css({
                top: 0,
                left: '50%',
                width: 0,
                height: 0
            }))
        }
    }

    const goToMenu = (index) => {
        state.menu = index
        updateWaves(index)
    }

    state.menus.map((m, i) => {
        const sectionId = m.attr('href').replace('#', '')
        const element = document.getElementById(sectionId)

        if(element) {
            new Waypoint({
                element: document.getElementById(sectionId),
                handler: function (direction) {
                    if (direction == 'down') {
                        goToMenu(i)
                    } else {
                        goToMenu(i - 1)
                    }
                },
                offset: 100
            })
        }

    })

    /**
     * END-MENUS
     */

    /**
     * TOOLBAR ANIM
     */

    $(window).scroll(() => {
        let windowScroll = $(window).scrollTop()
        if (windowScroll >= $(window).height() - 52) {
            toolbarComponent.removeClass('cy-toolbar-expanded')
            headerFabComponent.addClass('cy-hided')
            firstSectionComponent.css({ marginTop: 160 })
        } else {
            toolbarComponent.addClass('cy-toolbar-expanded')
            headerFabComponent.removeClass('cy-hided')
            firstSectionComponent.css({ marginTop: 0 })
        }

        windowScroll = Math.max(0, windowScroll - ($(window).height() - 52))

        const factor = (80 - Math.min(windowScroll, 80))
        toolbarComponent.css({ height: 80 + factor })

        /**
         * UPDATING MENU
         */
        updateWaves()
    })

})
