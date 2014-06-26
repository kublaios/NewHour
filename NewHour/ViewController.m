//
//  ViewController.m
//  NewHour
//
//  Created by Kubilay Erdogan on 26/06/14.
//  Copyright (c) 2014 kublaios. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
    
    // create the text view to see the response
    txtResponse = [[UITextView alloc] initWithFrame:CGRectMake(50, 100, CGRectGetWidth(self.view.frame) - 00, CGRectGetHeight(self.view.frame) - 200)];
    [self.view addSubview:txtResponse];
    
    // get the response from the server and show it in the textview
    [PFCloud callFunctionInBackground:@"hello" withParameters:@{} block:^(NSString *result, NSError *error) {
        if (error) {
            txtResponse.text = error.localizedDescription;
        } else {
            txtResponse.text = result;
        }
    }];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
