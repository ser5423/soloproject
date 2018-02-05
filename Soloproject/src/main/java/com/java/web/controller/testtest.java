package com.java.web.controller;
import java.util.Scanner;

public class testtest {
	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.println("입력해주세요");
        
        int dan = sc.nextInt();
        for(int i = 1; i < 10; i++){
        	int hap = dan * i;
        	System.out.println(dan + "*"+ i + "=" + hap);
        }
        
        
        for(int k = 1; k < 10; k++){
        	for(int h = 1; h<10; h++){
        		System.out.println(k + "*" + h + "=" + k*h);
        	}
        }
        
    }
}
