const __IZOTX_L_SVG = () => (`
    <svg
        width="162.56mm" height="162.56mm" version="1.1"
        viewBox="0 0 16256 16256">

        <g id="logo">
            <path
                class="left-leg"
                d="M8128 8601l21 4607c-1781,-4 -3571,231 -5292,692l-2384 -4099c2412,-778 4984,-1200 7655,-1200z" />
            <path
                class="right-leg"
                d="M8149 8601c2662,3 5225,423 7629,1198l-2379 4101c-1675,-449 -3434,-690 -5250,-692l0 -4607z" />
        </g>
    </svg>
`)

const __IZOTX_L = () => (`
    <div class="izotx-loading">
        <div class="izotx-loading-leg izotx-loading-leg-green">${__IZOTX_L_SVG()}</div>
        <div class="izotx-loading-leg izotx-loading-leg-orange">${__IZOTX_L_SVG()}</div>
        <div class="izotx-loading-leg izotx-loading-leg-blue">${__IZOTX_L_SVG()}</div>
        <div class="izotx-loading-leg izotx-loading-leg-green just-right-leg">${__IZOTX_L_SVG()}</div>
    </div>
`)

const __PORT_ITEMS = [
    { 
        size: 1, 
        link: 'https://play.google.com/store/apps/details?id=routinehelp.view',
        image: 'https://lh4.ggpht.com/KB3XcLlJQx6TBYMsxHsPKY_uYASgT0A7LiTLRTtIUlntNq-ApqBKa-wmPcMadD9Bugg=w300-rw',
    },
    { 
        size: 1, 
        link: 'http://www.radarlivre.com/',
        image: 'https://media.cmcdn.net/b99ee4b190d495b5466b/33237717/500x500.png',
        useImg: true,
    },
    { 
        size: 1, 
        image: 'https://media.cmcdn.net/8600c3c976fc7bd27e1c/33237727/500x500.png',
    },
    { 
        size: 1, 
        imageHTML: __IZOTX_L()
    },
    { 
        size: 2, 
        link: 'https://sistemas.quixada.ufc.br/',
        image: 'https://media.cmcdn.net/e30366116458051e34c5/33237473/960x539.png'
    },
    { 
        size: 1, 
        link: 'https://sistemas.quixada.ufc.br/sinutri/login',
        image: 'https://media.cmcdn.net/135853385d148278ab58/33237555/960x539.png'
    },
    { 
        size: 1, 
        link: 'https://celeration-charts.firebaseapp.com/',
        image: 'images/celeration.png'
    },
]

$(() => {
    const portfolioItemsElement = $('.cy-cool-grid')
    const portfolioItemTemplate = (item, i) => `
        <a href="${item.link ? item.link : ''}" class="cy-cool-grid-tile cy-cool-grid-tile-${item.size}" ${item.image ? `data-image="${item.image}"` : '' }>
            <div class="cy-cool-grid-tile-background">
                ${item.imageHTML ? item.imageHTML : ''}
            </div>
            <div class="cy-cool-grid-tile-overlay">
                <p translate>portfolio_item_${i}_title</p>
                <p translate>portfolio_item_${i}_text</p>
            </div>
        </a>
    `

    __PORT_ITEMS.map((item, i) => portfolioItemsElement.append(portfolioItemTemplate(item, i)))

    $('.cy-cool-grid-tile').each((_, el) => {
        $(el).css({
            background: `url(${$(el).data('image')}) center/cover`
        })
    })

    window.__updateTranslation? window.__updateTranslation() : false
})