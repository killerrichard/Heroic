const fs = require('fs')
const download = require('download')

const images = [
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_HBCgamemarch2018.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_fansiteventmarch18quest.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_baweventeastertown.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_bundlleasternmarch.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_hffmmarchevent1.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_easter18gen.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_2016doublecredits.png',
    'https://images.habbo.com/web_images/habbo-web-articles/wpid-lpromo_atcg.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_habbobitesjapanfeb18.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_flappybird2018feb.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_elegantbundlefeb2018.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_princessbundlefeb2018.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_fhhabbofebevent18.png', 
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_vdayeventfansite18.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_bawwalleeventfeb.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_hbceventfeb181.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_GFEFEB2018.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_habboxfeb1event.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_japaneselovebundlefeb2018.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_atlanticbaweventfeb18.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_hffmevent1feb18.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_habboquestevent1feb2018.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_caffescreenshotevent.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_swanbundlejanuary18.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_janend2018battleabll.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_val18gen.png',
    'https://images.habbo.com/web_images/habbo-web-articles/TPMPRomo.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_gen_amb_1.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_bawosmjan.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_bannercomp2018jan.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_caffescreenshotevent.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_gfeeventjan18.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_Memorygamejan2018.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_audemarseventjan18.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_audemarseventjan18.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_habboloungebundlejan2018.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_baweventjan18.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_fhjanevent18.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_Kreditsgame17012018.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_habburgersjan2018.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_comptjanevent.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_12janeventcom.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_gen15_07.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_SafetyCampaign_IT.png',
    'https://images.habbo.com/web_images/habbo-web-articles/lpromo_gen15_16.png'
]

images.forEach(img => {
    download(img, 'img')
        .then(() => {
            console.log(`Downloaded ${img}`);
        })
})