$(() => {

    $('.cy-device-autochange').each((_, e) => {

        const el = $(e)
        const devices = [ 'imac', 'tablet', 'phone' ]
        let index = 0
        setInterval(() => {
            el.removeClass(`.cy-device-${devices[index]}`)
            el.addClass(`.cy-device-${devices[++index]}`)
        }, 1000)

    })

})