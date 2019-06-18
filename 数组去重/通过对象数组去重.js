
        function arrDel(arr) {

            var result = [],

                obj = {
                };

            for (var i in arr) {

                if (!obj[arr[i]]) { //判断对象的属性
                    result.push(arr[i]);

                    obj[arr[i]] = 1;

                }

            }

            return result;

        }