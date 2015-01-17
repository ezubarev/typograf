var assert = require('chai').assert,
    Typograf = require('../dist/typograf'),
    t = new Typograf({lang: 'ru'}),
    ruTests = [
        ['    Мир - мой мир!    ', 'Мир\u00A0— мой\u00A0мир!'],
        ['Мороз был страшный но яблони выжили.', 'Мороз был страшный, но\u00A0яблони выжили.'],
        ['Стекло двери, которая ведет на веранду, усеяно дождевыми каплями.', 'Стекло двери, которая ведет на\u00A0веранду, усеяно дождевыми каплями.'],
        ['Роман, в котором творческие принципы Достоевского воплощаются в полной мере а удивительное владение сюжетом достигает подлинного расцвета.', 'Роман, в\u00A0котором творческие принципы Достоевского воплощаются в\u00A0полной мере, а\u00A0удивительное владение сюжетом достигает подлинного расцвета.'],
        ['"Энергия соблазна: от внутреннего к внешнему"', '«Энергия соблазна: от\u00A0внутреннего к\u00A0внешнему»']
    ];

describe('ru/smoke', function() {
    ruTests.forEach(function(item) {
        it(item[0], function() {
            assert.equal(t.execute(item[0]), item[1]);
        });
    });
});
