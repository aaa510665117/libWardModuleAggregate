//
//  ScanViewController.h
//  MobileDoctor
//
//  Created by winning on 2017/7/28.
//  Copyright © 2017年 Ran. All rights reserved.
//

#import "BaseViewController.h"

@interface ScanViewController : BaseViewController

@property (nonatomic,copy) void(^scanResultBlock)(NSString *result);

@end
