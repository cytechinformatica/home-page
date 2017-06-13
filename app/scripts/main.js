$(() => {

    $('.cy-btn-toggle-text').each((_, el) => {
        $(el).click(e => {
            e.preventDefault()
            const toExpand = $(`${$(el).data('to-expand')}`)
            const height = toExpand.find('p').outerHeight(true)
            const __ = window._cy_i18n.__

            if($(el).data('collapsed')) {
                toExpand.css({ height: 0 })
                $(el).data('collapsed', false)
                $(el).text(__($(el).data('collapsed-text')))
            } else {
                toExpand.css({ height: height })
                $(el).data('collapsed', true)
                $(el).data('collapsed-text', $(el).data('translation'))
                $(el).text(__($(el).data('expanded-text')))
            }
        })
    }) 

    $('.scrollspy').scrollSpy({ scrollOffset: 80 });

})

