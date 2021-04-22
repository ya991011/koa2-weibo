/**
 * @description noerl
 * @author noerl
 */


function sum(a,b){
    return a+b
}
test('testdemo1',()=>{
    const res = sum(10,20)
    expect(res).toBe(30)
})