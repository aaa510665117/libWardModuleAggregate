//
//  BasePatientModel.h
//  MobileDoctor
//
//  Created by WinningMac on 2019/7/19.
//  Copyright © 2019 Ran. All rights reserved.
//

#import "BaseModel.h"

NS_ASSUME_NONNULL_BEGIN

@interface BasePatientModel : BaseModel

/**
 病人唯一标识
 */
@property (nonatomic,copy) NSString * patid;

@end

NS_ASSUME_NONNULL_END
