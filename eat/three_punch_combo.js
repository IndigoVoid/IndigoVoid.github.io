        $i = 0;
        $('#start1').click(function(){
            $i++;
            if($i >=12 ){
               alert('这么作？今天别吃了！')
            }
        })
        $('#start2').click(function(){
            $i++;
            if($i >=12 ){
               alert('不知道吃什么？加qq：936177377可约我吃饭')
            }
        })
        $('#stop').click(function(){
            alert('这么作？今天别吃了！')
            $(this).hide();
        })