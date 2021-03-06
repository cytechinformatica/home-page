$(() => {

    const initTranslation = _cy_tr => {
        if (_cy_tr) {
            const _m = window.location.href.match(/\:\/\/[\w\.]+\/(\w+)\/?/)
            const _ul = _m ? _m[1] : null
            const l = (_ul || navigator.language || navigator.userLanguage || 'pt').substr(0, 2)

            locale.init(l)

            const tr = {}
            Object.keys(_cy_tr).map(k => {
                const r = _cy_tr[k]
                Object.keys(r).map(_k => {
                    if (!tr[_k]) tr[_k] = {}
                    tr[_k][k] = r[_k]
                })
            })

            Object.keys(tr).map(l => locale.add(l, tr[l]))

            const i18n = new locale.i18n(l);
            const __ = i18n.__;

            window.__updateTranslation = () => {
                $('[translate]').each((_, el) => {
                    if(!$(el).attr('data-translation')) {
                        $(el).attr('data-translation', $(el).text())
                    }
                    $(el).text(__($(el).data('translation')))
                })
            }
            window.__updateTranslation? window.__updateTranslation() : false
        }
    }

    const _cy_tr = _cy_translations || {}
    initTranslation(_cy_tr)

    $.getJSON('https://cytech-home-page.firebaseio.com/public/content/translations.json', (data) => {
        if(data) {
            const _cy_tr_new = {}
            $.extend(_cy_tr_new, data)
            initTranslation(data)
        }
    })
})