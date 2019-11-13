//
//  DoctorsItemModel.h
//  MobileDoctor
//
//  Created by WinningMac on 2019/2/27.
//  Copyright © 2019年 Ran. All rights reserved.
//

#import "BaseModel.h"

@interface DoctorsItemModel : BaseModel
@property (nonatomic,strong) NSString * ysdm;
@property (nonatomic,strong) NSString * ysmc;
@property (nonatomic,strong) NSString * zcmc;//职称
@property (nonatomic,strong) NSString * zcdm;//职称代码
@property (nonatomic,strong) NSString * zglb;//职工类别
@property (nonatomic,strong) NSString * zgms;//职工描述

@property (nonatomic,strong) NSString * ksdm;
@property (nonatomic,strong) NSString * ksmc;
@property (nonatomic,strong) NSString * bqdm;
@property (nonatomic,strong) NSString * bqmc;
//邀请科室布局需要
@property (nonatomic,strong) NSString * jsztmc;


@property (nonatomic,assign) BOOL  isSelected;
@end
