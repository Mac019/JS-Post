 class LinkedList {
    Node head;
    private int size;

    LinkedList(){
        this.size = 0;
    }


    class Node {
        String data ;
        Node next;

        Node(String data){
            this.data = data;
            this.next = null;  
            size++;// After all the implementations size is added
        }
    }
  

    public void addFirst(String data){
        Node newNode = new Node(data);
        if(head == null){
            head = newNode;
            return;
        }

        newNode.next = head;
        head = newNode;
    }


    public void addLast(String data){
        Node newNode = new Node(data);
        if(head == null){
            head = newNode;
            return;
        }

        Node currNode = head;
        while(currNode.next != null){
            currNode = currNode.next;
        }

        currNode.next = newNode;

    }

    public void printList(){
        if(head == null){
            System.out.println("List is Empty");
            return;
        }
        Node currNode = head;
        while(currNode != null){
            System.out.print(currNode.data + "->");
            currNode = currNode.next;
        }

        System.out.println("NULL");


    }

    public void deleteFirst(){
        if(head == null){
            System.out.println("The List Is Empty");
            return;
        }

        size --;

        head = head.next; 

    }

    public void deleteLast(){
        if(head == null){
            System.out.println("This List Is Empty");
            return;
        }

        size--;

        if(head.next == null){
            head = null;
            return;
        }

        Node secondLast = head;
        Node lastNode = head.next;
        while(lastNode.next != null){
            lastNode = lastNode.next;
            secondLast = secondLast.next;

        }
        secondLast.next = null;
    }


    public int getSize(){
        return size;
    }





    public static void main(String[] args) {
        

        LinkedList list = new LinkedList();

        list.addFirst("A");
        list.addFirst("Is");
        list.printList();
        list.addLast("List");
        list.printList();


        list.addFirst("This");
        list.printList();

        list.deleteFirst();
        list.printList();

        list.deleteLast();
        list.printList();
        System.out.println(list.getSize());
        list.addFirst("This");
        System.out.println(list.getSize());

    }

    
}