import java.util.*;
class sample
{
    public static int func(int arr[][])
    {
        ArrayList<int[]>li=new ArrayList<>();
        for(int it[]:arr)
        {
            int checkin=it[0];
            int checkout=it[1];
            li.add(new int[]{checkin,1});
            li.add(new int[]{checkout+1,-1});
        }
        
        li.sort((a,b)->(a[0]!=b[0])?(a[0]-b[0]):b[1]-a[1]);

        int max=0;
        int occ=0;
        int prev=-1;
        int days=0;

        for(int it[]:li)
        {
            if(prev!=-1&&max==occ)
            {
                days+=it[0]-prev;
            }
            occ+=it[1];
            if(occ>max)
            {
                max=occ;
                days=0;
            }
            prev=it[0];
        }

        return days;
    }

    public static void main(String args[])
    {
        int arr[][]={{1, 3}, {2, 6}, {5, 8}};
       System.out.println(func(arr));

    }
}