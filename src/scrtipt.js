var income = 4000
if (income < 3000) {
    alert("საშვალოზე დაბალი ხელფასი")
}
else if (income >= 3000 && income <=5000) {
    alert("საშუალო ხელფასი")
}
alert("მაღალი ხელფასი")


public class FindLargestandSmallestNumberMain {

    public static void main(String[] args) {

//array of 10 numbers
        int arr[] = new int[] {1,4,18,24,15,2,3,19,55};

//assign first element of an array to largest and smallest
        int smallest = arr[0];
        int largest = arr[0];

        for(int i=1; i< arr.length; i++) {
            if(arr[i] > largest)
                largest = arr[i];
            else if (arr[i] < smallest)
                smallest = arr[i];

        }

    }
}

public class Oddoreven{
    public static void main(String args[]){
    int a[]={1,2,5,6,3,2};
    System.out.println("Odd Numbers:");
    for(int i=0;i<a.length;i++){
    if(a[i]%2!=0){
    System.out.println(a[i]);
    }
    }
    System.out.println("Even Numbers:");
    for(int i=0;i<a.length;i++){
    if(a[i]%2==0){
    System.out.println(a[i]);
    }
    }
    }}