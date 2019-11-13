//
//  DeptModel.h
//  MobileDoctor
//
//  Created by 徐然 on 2017/7/19.
//  Copyright © 2017年 Ran. All rights reserved.
//

#import "BaseModel.h"

@interface DeptModel : BaseModel<NSCoding>

@property (nonatomic,copy) NSString * bqmc;//病区
@property (nonatomic,copy) NSString * ksmc;//科室
@property (nonatomic,copy) NSString * ysdm;//医生
@property (nonatomic,copy) NSString * bqdm;
@property (nonatomic,copy) NSString * ksdm;
@property (nonatomic,copy) NSString * wb;
@property (nonatomic,copy) NSString * py;

//已选中
@property (nonatomic,assign) BOOL isSelected;

@end
