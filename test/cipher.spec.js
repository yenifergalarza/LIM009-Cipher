describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
     assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"hijklmnopqrstuvwxyzabcdefg") ;  
    });

    it('debería retornar "*+,-./0123456789:;<=>?@abc" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset -23', () => {
      assert.equal(cipher.encode(-23,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"*+,-./0123456789:;<=>?@abc") ;  
     });
   

     it('debería retornar "uvwxyzabcdefghijklmnopqrst" para "abcdefghijklmnopqrstuvwxyz" con offset 38012345', () => {
      assert.equal(cipher.encode(38012345,"abcdefghijklmnopqrstuvwxyz"),"uvwxyzabcdefghijklmnopqrst");  
     });
   
     it('debería retornar "abc defghijklmnopqrstuvwxyz" para "abc defghijklmnopqrstuvwxyz" con offset 0', () => {
      assert.equal(cipher.encode(0,"abc defghijklmnopqrstuvwxyz"),"abcdefghijklmnopqrstuvwxyz");  
     });

    }
  );

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

   
    it('debería retornar "tuvwxyzabcdefghijklmnopqrs" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.decode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"tuvwxyzabcdefghijklmnopqrs") ;  
     });
 
     it('debería retornar "xyzabcdefghijklmnopqrstuvw" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset -23', () => {
      assert.equal(cipher.decode(-23,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"xyzabcdefghijklmnopqrstuvw") ;  
      });
    
 
      it('debería retornar "ghijklmnopqrstuvwxyzabcdef" para "abcdefghijklmnopqrstuvwxyz" con offset 38012345', () => {
        assert.equal(cipher.decode(38012345,"abcdefghijklmnopqrstuvwxyz"),"ghijklmnopqrstuvwxyzabcdef");  
       });
     
       it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "abcdefghijklmnopqrstuvwxyz" con offset 0', () => {
        assert.equal(cipher.decode(0,"abc defghijklmnopqrstuvwxyz"),"abcdefghijklmnopqrstuvwxyz");  
       });
     
    
    
    });
    
    
    
    
    });
    