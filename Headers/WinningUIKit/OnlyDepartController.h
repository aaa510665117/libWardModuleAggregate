//
//  OnlyDepartController.h
//  MobileDoctor
//
//  Created by winning on 2017/11/6.
//  Copyright © 2017年 Ran. All rights reserved.
//       单一科室选择页面

#import "BaseViewController.h"
#import "DeptModel.h"

@interface OnlyDepartController : BaseViewController

@property (nonatomic, assign) BOOL isShowAllDept;       //是否显示全院选项，全院返回All;
@property (nonatomic,copy) void(^selectDepartBlock)(DeptModel *model);

@end
