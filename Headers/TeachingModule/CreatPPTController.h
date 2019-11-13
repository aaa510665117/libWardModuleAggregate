//
//  CreatPPTController.h
//  MobileDoctor
//
//  Created by winning on 2018/3/14.
//  Copyright © 2018年 Ran. All rights reserved.
//

#import "BaseViewController.h"
#import "PatientModel.h"

typedef enum : NSUInteger {
    ChoenItemTypeForRecord = 0,//患者信息
    ChoenItemTypeForInspection,//检查报告
    ChoenItemTypeForCheck,//检验报告
} ChoenItemType;

@interface CreatPPTController : BaseViewController

@property (nonatomic,strong) PatientModel * model;


@end
