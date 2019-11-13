//
//  CstSpeechModel.h
//  MobileDoctor
//
//  Created by WinningMac on 2019/3/16.
//  Copyright © 2019年 Ran. All rights reserved.
//

#import "BaseModel.h"

@interface CstSpeechModel : BaseModel

@property (nonatomic,copy) NSString * ID;
@property (nonatomic,strong) NSArray * discussers;
@property (nonatomic,copy) NSString * category;
@property (nonatomic,copy) NSString * level;
@property (nonatomic,copy) NSString * purpose;
@property (nonatomic,copy) NSString * state;
@property (nonatomic,copy) NSString * ksdm;
@property (nonatomic,copy) NSString * ksmc;

@end
