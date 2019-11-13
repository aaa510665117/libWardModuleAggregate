//
//  FunctionManagerRecord.h
//  MobileDoctor
//
//  Created by WinningMac on 2018/5/31.
//  Copyright © 2018年 Ran. All rights reserved.
//

#import <CTPersistance/CTPersistance.h>

@interface FunctionManagerRecord : CTPersistanceRecord

@property (nonatomic,copy)NSNumber *auto_ID;

/**
 模块名称
 */
@property (nonatomic,copy)NSString *name;

/**
 模块代码
 */
@property (nonatomic,copy)NSString *code;

@end
