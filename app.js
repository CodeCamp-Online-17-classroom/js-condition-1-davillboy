// write code here
        console.log('1' > 4);               // false (string '1' ไม่มากกว่า number 4)
        console.log('' <= 1);               // true (string empty น้อยกว่าหรือเท่ากับ number 1)
        console.log('apple' > 'pineapple'); // false (ตรวจสอบตัวอักษรตามอัลฟาเบ็ต  'a' มากกว่า 'p')
        console.log(undefined == null);    // true (undefined และ null เป็น falsy values และถูกทำเป็น equal ในการเปรียบเทียบ ==)
        console.log(undefined === null);   // false (strict equality จึงไม่เท่ากัน)
        console.log(NaN !== 2);             // true (NaN ไม่เท่ากับ number 2 ในการเปรียบเทียบ strict inequality)
        console.log(NaN == NaN);            // false (NaN ไม่เท่ากับ NaN ในการเปรียบเทียบ ==)
        console.log(NaN === NaN);           // false (NaN ไม่เท่ากับ NaN ในการเปรียบเทียบ strict equality)
