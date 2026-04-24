const homeDishes = [
    { 
        name: 'カレーライス', img: 'https://image.delishkitchen.tv/recipe/199057563545764991/1.jpg?version=1766652365', 
        desc: '市販のルーで手軽に作れる、日本の国民的家庭料理。',
        ingredients: ['ご飯 1膳', '豚こま肉 50g', '玉ねぎ 1/4個', 'じゃがいも 1/2個', '人参 1/4本', 'カレールー 1皿分', '水 150ml'],
        steps: ['具材を一口大に切る', '鍋で肉と野菜を炒める', '水を入れ具材が柔らかくなるまで煮込む', '一度火を止めルーを溶かし、とろみがつくまで煮る']
    },
    { 
        name: 'おにぎり', img: 'https://image.delishkitchen.tv/recipe/202095908588880230/1.jpg?version=1747125002', 
        desc: 'お好みの具を詰めて結ぶだけ。忙しい時や朝食の強い味方。',
        ingredients: ['ご飯 150g', '塩 少々', '焼き海苔 1枚', 'お好みの具（梅・鮭など）適量'],
        steps: ['手を水で濡らし、塩を手のひらにまぶす', '中央に具を入れ、空気を抜くように握る', '形を整えて海苔を巻く']
    },
    { 
        name: 'お味噌汁', img: 'https://image.delishkitchen.tv/recipe/351125386366550310/1.jpg?version=1771984041', 
        desc: '冷蔵庫の余り野菜でパッと作れる、食卓の基本の一杯。',
        ingredients: ['水 150ml', '顆粒だし 小さじ1/2', '味噌 大さじ1', '豆腐 1/4丁', 'わかめ 少々', 'ねぎ 適量'],
        steps: ['鍋に水とだしを入れ沸騰させる', '豆腐とわかめを入れ、ひと煮立ちさせる', '火を止め、味噌を溶かし入れる', '器に盛り、ねぎを散らす']
    },
    { 
        name: 'オムライス', img: 'https://image.delishkitchen.tv/recipe/136626092508184845/1.jpg?version=1766543930', 
        desc: '卵とケチャップがあればすぐできる、お子様も喜ぶ定番メニュー。',
        ingredients: ['ご飯 1膳', '卵 2個', '鶏肉 30g', '玉ねぎ 1/8個', 'ケチャップ 大さじ2', '塩・胡椒 少々'],
        steps: ['具を炒め、ご飯とケチャップを加えてケチャップライスを作る', '卵を溶き、フライパンで半熟状に焼く', 'ご飯の上に乗せて形を整える']
    },
    { 
        name: '醤油ラーメン', img: 'https://image.delishkitchen.tv/recipe/140812754117198243/1.jpg?version=1769761294', 
        desc: '生麺やインスタントでも美味しく。お好みのトッピングを添えて。',
        ingredients: ['中華麺 1玉', 'ラーメンスープ（醤油）', 'チャーシュー 1枚', 'メンマ・ネギ 適量', 'お湯 300ml'],
        steps: ['たっぷりの湯で麺を指定の時間茹でる', '丼にスープの素とお湯を入れる', '湯切りした麺を入れ、具材をトッピングする']
    },
    { 
        name: '豚の生姜焼き', img: 'https://image.delishkitchen.tv/recipe/197328869693326368/1.jpg?version=1763688145', 
        desc: '豚肉をタレに漬けて焼くだけ。ご飯がどんどん進むおかず。',
        ingredients: ['豚ロース肉 100g', '玉ねぎ 1/4個', 'おろし生姜 小さじ1', '醤油・みりん・酒 各大さじ1'],
        steps: ['調味料を合わせ、肉を10分ほど漬け込む', 'フライパンで油を熱し、玉ねぎと肉を焼く', '両面に火が通り、タレが絡んだら完成']
    },
    { 
        name: '目玉焼きトースト', img: 'https://image.delishkitchen.tv/recipe/144709998029570467/1.jpg?version=1760607961', 
        desc: 'フライパン一つで。シンプルながら満足感のある朝の定番。',
        ingredients: ['食パン 1枚', '卵 1個', 'バター 少々', '塩・胡椒 少々'],
        steps: ['食パンをトースターでこんがり焼く', 'フライパンで好みの硬さの目玉焼きを作る', 'パンにバターを塗り、目玉焼きを乗せて塩胡椒する']
    },
    { 
        name: 'ナポリタン', img: 'https://image.delishkitchen.tv/recipe/194109661983540305/1.jpg?version=1756199161', 
        desc: 'ケチャップとピーマン、玉ねぎで懐かしい味わいのパスタ。',
        ingredients: ['パスタ 100g', 'ソーセージ 2本', '玉ねぎ 1/8個', 'ピーマン 1/2個', 'ケチャップ 大さじ3', 'バター 10g'],
        steps: ['パスタを規定時間茹でる', '具材を炒め、茹でた麺とケチャップを加える', '仕上げにバターを入れ、全体に絡める']
    },
    { 
        name: 'チャーハン', img: 'https://image.delishkitchen.tv/recipe/154551162509459859/1.jpg?version=1713496922', 
        desc: '残りご飯と卵でパパッと作れる、お昼ご飯の定番。',
        ingredients: ['ご飯 1膳', '卵 1個', 'ネギ 少々', '醤油・鶏ガラだし 各少々', '塩・胡椒 適量'],
        steps: ['フライパンで卵を炒め、すぐにご飯を投入する', '強火でパラパラになるまで炒める', '調味料を入れ、最後にネギを加えて仕上げる']
    },
    { 
        name: '焼き餃子', img: 'https://image.delishkitchen.tv/recipe/194115486496063892/1.jpg?version=1746080101', 
        desc: '市販の皮で包んで焼くだけ。パリパリの食感がたまらない。',
        ingredients: ['餃子の皮 6枚', '豚ひき肉 50g', '白菜（みじん切り） 少々', 'ニラ・醤油・ごま油 各少々'],
        steps: ['ひき肉と野菜、調味料をよく混ぜる', '皮に餡を包み、フライパンに並べる', '水を入れて蒸し焼きにし、水分が飛んだら焼き目をつける']
    },
    { 
        name: '肉じゃが', img: 'https://image.delishkitchen.tv/recipe/153240773708480781/1.jpg?version=1775816463', 
        desc: 'ホクホクのじゃがいもに味が染みた、おふくろの味。',
        ingredients: ['豚肉 80g', 'じゃがいも 1個', '玉ねぎ 1/4個', '人参 1/4本', '醤油・砂糖・酒 各大さじ1', '水 100ml'],
        steps: ['具材を切り, 鍋で軽く炒める', '水と調味料を加え、落とし蓋をして煮込む', 'じゃがいもが柔らかくなったら火を止め、味を馴染ませる']
    },
    { 
        name: '鶏の唐揚げ', img: 'https://image.delishkitchen.tv/recipe/167612989870965228/1.jpg?version=1759194819', 
        desc: '外はカリッと、中はジューシー. みんな大好きな一品. ',
        ingredients: ['鶏もも肉 150g', '醤油・酒 各大さじ1', 'おろし生姜・にんにく 少々', '片栗粉 適宜'],
        steps: ['鶏肉を一口大に切り、調味料に15分ほど漬ける', '片栗粉を全体にまぶす', '170度の油で揚げ、最後に強火でカリッと仕上げる']
    },
    { 
        name: 'きつねうどん', img: 'https://image.delishkitchen.tv/recipe/357774125982286118/1.jpg?version=1697074982', 
        desc: '甘辛いお揚げがじゅわっと美味しい、定番のうどん。',
        ingredients: ['うどん 1玉', '味付け油揚げ 1枚', 'めんつゆ（3倍濃縮） 50ml', '水 250ml', 'ネギ 適量'],
        steps: ['鍋に水とめんつゆを入れ沸騰させる', 'うどんを入れ、指定の時間煮る', '丼に移し、油揚げとネギを乗せる']
    },
    { 
        name: 'とんかつ', img: 'https://image.delishkitchen.tv/recipe/154832041039364499/1.jpg?version=1739501522', 
        desc: 'サクサクの衣がたまらない, ボリューム満点のメイン料理。',
        ingredients: ['豚ロース 1枚', '塩・胡椒 少々', '小麦粉・卵・パン粉 適宜', '揚げ油'],
        steps: ['肉の筋を切り、塩胡椒する', '小麦粉、卵、パン粉の順に衣をつける', '170度の油できつね色になるまで揚げる']
    },
    { 
        name: '焼き鮭', img: 'https://image.delishkitchen.tv/recipe/201941840176349542/1.jpg?version=1766629503', 
        desc: '脂の乗った鮭をシンプルに。朝食にもぴったり。',
        ingredients: ['鮭の切り身 1枚', '塩 少々', '大根おろし 適宜'],
        steps: ['鮭の両面に軽く塩を振る', 'グリルまたはフライパンで両面をこんがり焼く', '大根おろしを添えて完成']
    },
    { 
        name: '麻婆豆腐', img: 'https://image.delishkitchen.tv/recipe/194117017215698001/1.jpg?version=1774608171', 
        desc: 'ピリ辛の挽肉と豆腐が絡み合う、ご飯の進む中華。',
        ingredients: ['豆腐 1丁', '豚ひき肉 50g', '麻婆豆腐の素 1回分', 'ネギ 少々'],
        steps: ['豆腐をさいの目切りにする', 'フライパンでひき肉を炒め、素と水を加える', '豆腐を入れ、優しく混ぜながら煮込む', '仕上げにネギを散らす']
    },
    { 
        name: '親子丼', img: 'https://image.delishkitchen.tv/recipe/197320405118092320/1.jpg?version=1751251000', 
        desc: 'ふわとろ卵と鶏肉の旨みが広がる、優しい味わいの丼。',
        ingredients: ['鶏もも肉 50g', '玉ねぎ 1/8個', '卵 2個', 'めんつゆ（3倍濃縮） 大さじ1.5', '水 50ml', 'ご飯 1膳'],
        steps: ['小さい鍋に水、めんつゆ、玉ねぎ、鶏肉を入れ煮る', '肉に火が通ったら、溶き卵を回し入れる', '蓋をして半熟状になったら、ご飯の上に乗せる']
    },
    { 
        name: '焼きそば', img: 'https://image.delishkitchen.tv/recipe/199359213393150374/1.jpg?version=1715043602', 
        desc: 'ソースの香ばしい匂いが食欲をそそる、家庭の味。',
        ingredients: ['焼きそば麺 1玉', '豚肉 30g', 'キャベツ 1枚', '粉末ソース 1袋', '紅生姜・青のり 適宜'],
        steps: ['具材を切り、フライパンで炒める', '麺を入れ、少量の水（または酒）を振ってほぐす', 'ソースを加え、全体によく絡める']
    }
];

const diningDishes = [
    { name: 'スシロー (回転寿司)', img: 'https://www.akindo-sushiro.co.jp/assets/images/pages/common/office_logo.svg', desc: '好きなネタを好きなだけ！家族みんなで楽しめる。' },
    { name: '焼肉きんぐ', img: 'https://www.yakiniku-king.jp/wp-content/themes/king_basic_2024/assets/img/common/logo_header.svg', desc: '食べ放題でガッツリ肉！サイドメニューも豊富。' },
    { name: 'マクドナルド', img: 'https://www.mcdonalds.co.jp/assets/images/mcd-logo.svg', desc: '手軽に済ませるならここ。ポテトの誘惑には勝てない。' },
    { name: '家系ラーメン', img: 'https://hamakore.yokohama/uploads/2021/04/yoshimuraya-yokohama-ramen-report-02-1.jpg', desc: '濃厚スープに浸した海苔でご飯を巻くのが至高。' },
    { name: 'サイゼリヤ', img: 'https://www.saizeriya.co.jp/wp-content/themes/saizeriya/assets/images/logo_sp.png', desc: '圧倒的コスパ。間違い探しをしながら料理を待とう。' },
    { name: '吉野家', img: 'https://www.yoshinoya.com/assets/images/logo_white.svg', desc: '「うまい、やすい、はやい」。紅生姜をたっぷり乗せて。' },
    { name: '丸亀製麺', img: 'https://images.microcms-assets.io/assets/58eb40d284924aeb96de2de93fa08d93/8d56e5b3720f4dc9a075860c5871ad2b/og_top.jpg', desc: '揚げたて天ぷらとコシのあるうどん。かしわ天がおすすめ。' },
    { name: '餃子の王将', img: 'https://www.ohsho.co.jp/common/img/og_image.png', desc: 'パリッとした焼き餃子はビールにもご飯にも最高。' },
    { name: 'ココ壱番屋', img: 'https://www.ichibanya.co.jp/assets/images/common/ogp.png', desc: '自分好みの辛さとトッピングで、究極のカレーを。' },
    { name: 'びっくりドンキー', img: 'https://www.bikkuri-donkey.com/control-panel/wp-content/themes/donkey2022/images/ogp.jpg', desc: 'あの大きな木製メニューから選ぶワクワク感。' },
    { name: 'ケンタッキー', img: 'https://www.kfc.co.jp//static/media/kfcLogo.492728c6.svg', desc: '秘伝の11種類のスパイス。たまに無性に食べたくなる。' },
    { name: 'すき家', img: 'https://www.sukiya.jp/img/ogp.png', desc: 'トッピング牛丼のバリエーションが豊富。' },
    { name: 'てんや', img: 'https://www.tenya.co.jp/changing/img/logo_tenya.svg', desc: '揚げたての天丼がリーズナブルに楽しめる。' },
    { name: 'モスバーガー', img: 'https://www.mos.jp/apple-touch-icon-precomposed.png', desc: '注文を受けてから作る、素材にこだわったバーガー. ' },
    { name: 'リンガーハット', img: 'https://www.ringerhut.jp/common_2017/img/ogp-image.jpg', desc: 'たっぷり野菜のちゃんぽん。皿うどんも人気。' },
    { name: 'ガスト', img: 'https://www.skylark.co.jp/site_resource/gusto/images/img_ogp.png', desc: 'ドリンクバーとチーズINハンバーグが定番。' },
    { name: 'バーミヤン', img: 'https://www.skylark.co.jp/site_resource/bamiyan/images/img_ogp.png', desc: '本格的な中華をリーズナブルに。火鍋もおすすめ。' },
    { name: '串カツ田中', img: 'https://kushi-tanaka.com/assets/img/common/logo.png', desc: 'ソース二度づけ禁止！揚げたての串カツをワイワイと。' }
];

const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spinBtn');
const resultOverlay = document.getElementById('resultOverlay');
const resultImg = document.getElementById('resultImg');
const resultTitle = document.getElementById('resultTitle');
const resultDesc = document.getElementById('resultDesc');
const closeBtn = document.getElementById('closeBtn');
const homeModeBtn = document.getElementById('homeMode');
const outModeBtn = document.getElementById('outMode');
const modeSubtitle = document.getElementById('modeSubtitle');
const recipeSection = document.getElementById('recipeSection');
const ingredientsList = document.getElementById('ingredientsList');
const stepsList = document.getElementById('stepsList');

let currentRotation = 0;
let displayedDishes = [];
let currentMode = 'home';

function getPool() {
    return currentMode === 'home' ? [...homeDishes] : [...diningDishes];
}

function shuffleMenu() {
    let pool = getPool();
    pool = pool.sort(() => 0.5 - Math.random());
    displayedDishes = pool;
    renderWheel();
}

function renderWheel() {
    wheel.innerHTML = '';
    const angleStep = 360 / displayedDishes.length;
    displayedDishes.forEach((dish, i) => {
        const card = document.createElement('div');
        card.className = 'dish-card';
        card.style.transform = `translate(-50%, -50%) rotate(${i * angleStep}deg) translateY(-150px)`;
        card.innerHTML = `<img src="${dish.img}" alt="${dish.name}"><span>${dish.name}</span>`;
        wheel.appendChild(card);
    });
}

function spin() {
    if (displayedDishes.length === 0) return;
    spinBtn.disabled = true;
    wheel.style.transition = 'none';
    wheel.style.transform = 'rotate(0deg)';
    currentRotation = 0;

    setTimeout(() => {
        shuffleMenu();
        const rounds = 8 + Math.floor(Math.random() * 5);
        const angleStep = 360 / displayedDishes.length;
        const targetIndex = Math.floor(Math.random() * displayedDishes.length);
        const targetAngle = rounds * 360 + targetIndex * angleStep;
        currentRotation = targetAngle;
        
        wheel.style.transition = 'transform 5s cubic-bezier(0.15, 0, 0.15, 1)';
        wheel.style.transform = `rotate(${-currentRotation}deg)`;

        setTimeout(() => {
            showResult(displayedDishes[targetIndex]);
            spinBtn.disabled = false;
        }, 5000);
    }, 50);
}

function showResult(dish) {
    resultImg.src = dish.img;
    resultTitle.textContent = dish.name;
    resultDesc.textContent = dish.desc;

    if (currentMode === 'home' && dish.ingredients && dish.steps) {
        recipeSection.style.display = 'block';
        ingredientsList.innerHTML = dish.ingredients.map(ing => `<li>${ing}</li>`).join('');
        stepsList.innerHTML = dish.steps.map(step => `<li>${step}</li>`).join('');
    } else {
        recipeSection.style.display = 'none';
    }

    resultOverlay.classList.add('show');
}

function closeResult() {
    resultOverlay.classList.remove('show');
}

homeModeBtn.addEventListener('click', () => {
    currentMode = 'home';
    homeModeBtn.classList.add('active');
    outModeBtn.classList.remove('active');
    modeSubtitle.textContent = '今日は家で作る？それとも外で食べる？';
    shuffleMenu();
});

outModeBtn.addEventListener('click', () => {
    currentMode = 'out';
    outModeBtn.classList.add('active');
    homeModeBtn.classList.remove('active');
    modeSubtitle.textContent = '今日のお外ご飯、どこに行く？';
    shuffleMenu();
});

spinBtn.addEventListener('click', spin);
closeBtn.addEventListener('click', closeResult);

shuffleMenu();
