$(() => {

    const toolbarComponent = $('.cy-toolbar')
    const headerFabComponent = $('.cy-header-fab')
    const firstSectionComponent = $('#1st-section')

    $(window).scroll(() => {
        let windowScroll = $(window).scrollTop()
        if(windowScroll >= $(window).height() - 52) {
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
    })

    
    /**
     * MENUS
     */

    const circleTemplate = index => 
        (`<div id="cy-toolbar-active-circle-${index}" class="cy-toolbar-active-circle-${index}"></div>`)
    
    const state = {
        menu: -1,
        menus: [],
    }

     $('.cy-toolbar-menu').each((_, el) => state.menus.push($(el)))

})
