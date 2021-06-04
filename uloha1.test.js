function phoneNrsAreEqual(nr1, nr2) {
    var nr11=nr1.replace(/(([4]+[2]+[1])|([0]+[0]+[4]+[2]+[1]))+/g,'0').replace(/(([0]+[5]+[3])|([+]+[1])|([+]+[6]+[1]))+/g,'');
    var nr22=nr2.replace(/(([4]+[2]+[1])|([0]+[0]+[4]+[2]+[1]))+/g,'0').replace(/(([0]+[5]+[3])|([+]+[1])|([+]+[6]+[1]))+/g,'');
    return nr11.replace(/[^0-9]+/g, '') == nr22.replace(/[^0-9]+/g, '');
}
test('same or not',()=>
{
    expect(phoneNrsAreEqual("0949852174","+421949852174")).toBe(true);
    expect(phoneNrsAreEqual("+421949852174","0949852174")).toBe(true);
    expect(phoneNrsAreEqual("+421 94 98 52 174","+421-949-852-174")).toBe(true);
    expect(phoneNrsAreEqual("+421949852174","+421911594807")).toBe(false);
    // Dala som tu dalsie napady
    expect(phoneNrsAreEqual("4467692","053/4467692")).toBe(true);//prípady pevných liniek
    expect(phoneNrsAreEqual("+421!!|/---///919212760","+421***&&91921 - 276``-``0")).toBe(true);//prípady čísel s lomítkom a rôzne kombinácie (pomlčka, lomítko)
    expect(phoneNrsAreEqual("+4210907919912","00421-0907 919 912")).toBe(true);//prípady rôzneho zápisu predvoľby
    expect(phoneNrsAreEqual("1-541-754-3010","0975187437")).toBe(false);//zahraničné čísla
    expect(phoneNrsAreEqual("+3805018","+380501844989")).toBe(false);
    expect(phoneNrsAreEqual("+1-202-555-0182","+61 2025550182")).toBe(true);//prípad rovnakých čísel s predvoľbami rôznych štátov

});