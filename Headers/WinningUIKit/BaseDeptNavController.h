//
//  BaseDeptNavController.h
//  MobileDoctor
//
//  Created by 徐然 on 2017/7/21.
//  Copyright © 2017年 Ran. All rights reserved.

//=============导航栏需要科室选择的继承该类==============
//=============其他继承BaseViewController==============

#import "BaseViewController.h"

@interface BaseDeptNavController : BaseViewController


@property(nonatomic,strong)UIButton * officeBtn;
@property(nonatomic,strong)UIButton * iconBtn;

@end
