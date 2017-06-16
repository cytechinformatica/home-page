$(() => {

    $('.cy-btn-toggle-text').each((_, el) => {
        $(el).click(e => {
            e.preventDefault()
            const toExpand = $(`${$(el).data('to-expand')}`)
            const height = toExpand.find('p').outerHeight(true)

            if($(el).data('collapsed')) {
                toExpand.css({ height: 0 })
                $(el).data('collapsed', false)
                $(el).text($(el).data('collapsed-text'))
            } else {
                toExpand.css({ height: height })
                $(el).data('collapsed', true)
                $(el).data('collapsed-text', $(el).data('translation'))
                $(el).text($(el).data('expanded-text'))
            }

            window.__updateTranslation? window.__updateTranslation() : false
        })
    }) 

    $('.scrollspy').scrollSpy({ scrollOffset: 80 });

    $('.cy-toolbar .cy-toolbar-cool-icons .cy-toolbar-menu').each((_, el) => {
        const menu = $(el).clone()
        menu.removeClass('hide-on-med-and-down')
        const wrapper = $($.parseHTML('<li></li>'))
        wrapper.append(menu)
        $('#slide-out').append(wrapper)
    })

    $('.button-collapse').sideNav();

    window.__updateTranslation? window.__updateTranslation() : false

})

