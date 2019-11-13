//
//  LTSCAlendarEventDelegate.h
//  MobileDoctor
//
//  Created by winning on 2018/4/2.
//  Copyright © 2018年 Ran. All rights reserved.
//

#import <Foundation/Foundation.h>

@class PatientModel;

@protocol LTSCAlendarEventDelegate <NSObject>

@optional
- (void)selectPatientwithModel:(PatientModel *)model;


@end
