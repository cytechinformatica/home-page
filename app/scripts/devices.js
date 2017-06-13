$(() => {

    $('.cy-device-auto-change').each((_, e) => {
        const el = $(e)
        const devices = [ 'imac', 'tablet', 'phone' ]
        let index = 0
        setInterval(() => {
            el.removeClass(`cy-device-${devices[index % devices.length]}`)
            el.addClass(`cy-device-${devices[++index % devices.length]}`)
        }, 3500)

    })

})