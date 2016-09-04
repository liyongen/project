/**
 * Created by hxsd on 2016/7/28.
 */
//����һ���µ�ģ�飬ר�Ź�����ֹ�����
var myfilter=angular.module("customFilter",[]);

myfilter.filter("range",function(){
    //products�ǹ�����ǰ����Ǹ�Ҫ����������
    //currentPageҪ��ʾ��ҳ��
    //pageSizeһҳҪ��ʾ����Ʒ����

    return function(products,currentPage,pageSize){
       //��ֹ�ͻ�����ַ���������붫��
        if(angular.isArray(products)&&angular.isNumber(currentPage)&&angular.isNumber(pageSize)){
            //���㵱ǰ�������ʾ��Ʒ��������ʼ����ֵ
            var starIndex=(currentPage-1)*pageSize;
            //���д�ϵ�ҳ����5000ҳ��������Ʒ�����������ؿ�����
            if(starIndex>=products.length){
                return [];
            }else{
                return products.splice(starIndex,pageSize);//��ȡһҳ����Ʒ�����ж�������������Ʒ����
            };
        }else{
            //�������Ĳ��������򲻶�ԭ�������κδ���
            return products;
        };

    };
})


//�Զ�������ҳ������ť�������������ж��ٸ���ť


myfilter.filter("navCount",function(){
    //products����Ϊ���飬pageSizeΪһҳ������Ʒ����
    return function(products,pageSize){
        if(angular.isArray(products)&&angular.isNumber(pageSize)){
            var navArr=[];//����һ��������

            //���㰴ť����
            var navTotal=Math.ceil(products.length/pageSize);   //Math.ceil(2.5)=3����ȡֵ
            for(var i=0;i<navTotal;i++){
                navArr.push(i+1);
            }

            return navArr;//��ʱ��������Ѿ��Ǳ�ɡ�1,2,3,4,5,6----------��
        }else{
            //�������Ĳ��������򲻶�ԭ�������κδ���
            return products;
        };


    };
})



























