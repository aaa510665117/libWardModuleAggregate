//
//  ReceiveCstModel.h
//  MobileDoctor
//
//  Created by WinningMac on 2019/3/8.
//  Copyright © 2019年 Ran. All rights reserved.
//

#import "BaseModel.h"
#import "PatientModel.h"

@interface ReceiveCstModel : BaseModel

@property (nonatomic,strong) PatientModel * patient;
@property (nonatomic,strong) NSArray * discussers;
@property (nonatomic,copy) NSString * ID;
@property (nonatomic,copy) NSString * patid;
@property (nonatomic,copy) NSString * category;
@property (nonatomic,copy) NSString * level;
@property (nonatomic,copy) NSString * time;
@property (nonatomic,copy) NSString * sqksdm;
@property (nonatomic,copy) NSString * sqks;
@property (nonatomic,copy) NSString * sqysdm;
@property (nonatomic,copy) NSString * sqys;//申请医生
@property (nonatomic,copy) NSString * syksdm;
@property (nonatomic,copy) NSString * syks;
@property (nonatomic,copy) NSString * syysdm;
@property (nonatomic,copy) NSString * syys;//受邀医生
@property (nonatomic,copy) NSString * apry;//安排人员
@property (nonatomic,copy) NSString * hznr;//会诊内容
@property (nonatomic,copy) NSString * hzyj;//会诊意见
@property (nonatomic,copy) NSString * cwdm;
@property (nonatomic,copy) NSString * hzfs;//会诊方式 - 1视频会诊  0现场会诊
@property (nonatomic,assign) int syzt;
@property (nonatomic,assign) int jszt;//0未接收  1已接收   2已答复

@property (nonatomic,assign) BOOL  isShow;

@end
