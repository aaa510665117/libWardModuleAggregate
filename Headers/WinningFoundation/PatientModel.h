//
//  PatientModel.h
//  MobileDoctor
//
//  Created by 徐然 on 2017/7/18.
//  Copyright © 2017年 Ran. All rights reserved.
//

#import "BasePatientModel.h"

@interface PatientModel : BasePatientModel

@property (nonatomic,copy) NSString * name;
@property (nonatomic,copy) NSString * age;
@property (nonatomic,copy) NSString * ryrq;
@property (nonatomic,copy) NSString * sex;
@property (nonatomic,copy) NSString * ksmc;
@property (nonatomic,copy) NSString * bqmc;
@property (nonatomic,copy) NSString * zdmc;
@property (nonatomic,copy) NSString * zzysmc;
@property (nonatomic,copy) NSString * cyrq; //出院日期
@property (nonatomic,assign) int xh;

@property (nonatomic,copy) NSString * bed;
@property (nonatomic,copy) NSString * cwdm;
@property (nonatomic,assign) int  gzbz;
@property (nonatomic,assign) int  brzt;  //病人状态
//新增查房时间属性
@property (nonatomic,strong) NSString * cfsj;
//@property (nonatomic,assign) int * selectedRow;

@end
